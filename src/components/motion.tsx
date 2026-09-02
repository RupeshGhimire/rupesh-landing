import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";

/* ------------------------------------------------------------------ */
/* Shared motion helpers (vanilla rAF — no extra deps)                 */
/* ------------------------------------------------------------------ */

/** Global singleton pointer position (normalized -1..1), updated once per frame. */
const pointer = { x: 0, y: 0, tx: 0, ty: 0, ready: false };
const listeners = new Set<() => void>();

if (typeof window !== "undefined") {
  window.addEventListener(
    "pointermove",
    (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
      pointer.ready = true;
    },
    { passive: true },
  );
  // single rAF loop easing the pointer, notifying subscribers
  const tick = () => {
    pointer.x += (pointer.tx - pointer.x) * 0.08;
    pointer.y += (pointer.ty - pointer.y) * 0.08;
    listeners.forEach((fn) => fn());
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function usePointerFrame(callback: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  }, [callback, enabled]);
}

/** True when the device likely has a fine pointer (desktop). */
export function useHasFinePointer(): boolean {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);
  return fine;
}

/* ------------------------------------------------------------------ */
/* Parallax wrapper — children drift subtly toward the pointer         */
/* ------------------------------------------------------------------ */

export function Parallax({
  children,
  strength = 20,
  className = "",
  style,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const fine = useHasFinePointer();
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ref = useRef<HTMLDivElement | null>(null);
  const enabled = fine && !reduced;

  usePointerFrame(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `translate3d(${(-pointer.x * strength).toFixed(2)}px, ${(
      -pointer.y * strength
    ).toFixed(2)}px, 0)`;
  }, enabled);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: enabled ? "transform" : undefined, ...style }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tilt — 3D perspective tilt on hover (cards)                         */
/* ------------------------------------------------------------------ */

export function Tilt({
  children,
  className = "",
  max = 8,
  scale = 1.02,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
}) {
  const fine = useHasFinePointer();
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(
      2,
    )}deg) rotateY(${(px * max).toFixed(2)}deg) scale(${scale})`;
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  if (!fine) return <div className={className}>{children}</div>;

  return (
    <div
      ref={ref}
      className={`${className} tilt`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic — element leans toward the cursor                          */
/* ------------------------------------------------------------------ */

export function Magnetic({
  children,
  className = "",
  strength = 0.25,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const fine = useHasFinePointer();
  const ref = useRef<HTMLSpanElement | null>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  if (!fine) return <span className={className}>{children}</span>;

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* SpotlightCard — cursor-tracked sheen inside bordered panels         */
/* ------------------------------------------------------------------ */

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const fine = useHasFinePointer();
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  if (!fine) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={`spotlight ${className}`} onPointerMove={onMove}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CursorGlow — soft ember light following the pointer                 */
/* ------------------------------------------------------------------ */

export function CursorGlow() {
  const fine = useHasFinePointer();
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  usePointerFrame(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `translate3d(${(pointer.x * 0.5 + 0.5) * (window.innerWidth - 480)}px, ${(
      pointer.y * 0.5 +
      0.5
    ) * (window.innerHeight - 480)}px, 0)`;
  }, fine);

  useEffect(() => {
    if (!fine) return;
    const enter = () => setActive(true);
    const leave = () => setActive(false);
    document.addEventListener("pointerenter", enter);
    document.addEventListener("pointerleave", leave);
    return () => {
      document.removeEventListener("pointerenter", enter);
      document.removeEventListener("pointerleave", leave);
    };
  }, [fine]);

  if (!fine) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[1] h-[480px] w-[480px] rounded-full transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "radial-gradient(circle, rgba(232,168,76,0.05) 0%, transparent 65%)",
        willChange: "transform",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* ScrollProgress — thin ember bar along the top edge                  */
/* ------------------------------------------------------------------ */

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-ember to-emberhi"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
