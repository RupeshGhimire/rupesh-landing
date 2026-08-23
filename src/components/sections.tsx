import { useState } from "react";
import { Reveal, useCountUp, useInView, useScramble } from "../lib/hooks";
import { SectionHead } from "./chrome";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CopyIcon,
  GridIcon,
  MotionIcon,
  PaletteIcon,
  TypeIcon,
} from "./icons";

/* ------------------------------------------------------------------ */
/* Shared mini wireframe — the skeleton drawing itself                 */
/* ------------------------------------------------------------------ */

type WireRow = { label: string; kind: "bar" | "cols"; h: string; w?: string };

const WIRE_ROWS: WireRow[] = [
  { label: "NAV", kind: "bar", h: "h-2", w: "w-full" },
  { label: "HERO", kind: "bar", h: "h-10", w: "w-3/4" },
  { label: "TICKER", kind: "bar", h: "h-2.5", w: "w-full" },
  { label: "GRID", kind: "cols", h: "h-9" },
  { label: "METRICS", kind: "cols", h: "h-5" },
  { label: "FOOTER", kind: "bar", h: "h-2", w: "w-1/2" },
];

function MiniWireframe({ rows = WIRE_ROWS }: { rows?: WireRow[] }) {
  return (
    <div className="space-y-2.5">
      {rows.map((row) => (
        <div key={row.label} className="group flex items-center gap-4">
          {row.kind === "bar" ? (
            <div className="flex-1">
              <div
                className={`${row.h} ${row.w ?? "w-full"} rounded-[2px] bg-fog/10 transition-colors duration-300 group-hover:bg-ember/70`}
              />
            </div>
          ) : (
            <div className="flex flex-1 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`${row.h} flex-1 rounded-[2px] bg-fog/10 transition-colors duration-300 group-hover:bg-ember/70`}
                />
              ))}
            </div>
          )}
          <span className="w-16 text-right font-mono text-[9px] uppercase tracking-[0.2em] text-mist opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {row.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 00 — Hero                                                           */
/* ------------------------------------------------------------------ */

const SPEC_ROWS: Array<[string, string]> = [
  ["Build", "1.0.4"],
  ["Theme", "Dark-first"],
  ["Blocks", "18"],
  ["Deps", "00"],
  ["Weight", "9.2 KB"],
  ["License", "MIT"],
];

export function Hero() {
  const kicker = useScramble("LANDING-PAGE FRAMEWORK — SPEC 001");

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* corner registration marks */}
      <span className="pointer-events-none absolute left-6 top-24 hidden font-mono text-sm text-line lg:block" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute right-6 top-24 hidden font-mono text-sm text-line lg:block" aria-hidden="true">+</span>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* left — statement */}
          <div className="lg:col-span-7">
            <p className="kicker mb-8 min-h-[14px]" aria-label="Landing-page framework — spec 001">
              {kicker}
            </p>

            <h1 className="font-display text-[clamp(3rem,9vw,6.25rem)] font-bold leading-[0.98] tracking-[-0.03em] text-fog">
              <span className="mask-line">
                <span style={{ animationDelay: "0.1s" }}>Start from</span>
              </span>
              <span className="mask-line">
                <span style={{ animationDelay: "0.24s" }}>
                  the <span className="text-ember">bones.</span>
                </span>
              </span>
            </h1>

            <Reveal delay={450}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-mist sm:text-lg">
                Skeleton is a dark-first landing framework for people who ship. Eighteen pre-wired
                blocks, a strict type system, and a motion diet — the only thing left to decide is
                what you&rsquo;re saying.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#quickstart"
                  className="group flex items-center gap-3 bg-ember px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-emberhi hover:shadow-[0_0_40px_rgba(232,168,76,0.25)]"
                >
                  Get the skeleton
                  <ArrowDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#anatomy"
                  className="group flex items-center gap-3 border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-fog transition-colors duration-200 hover:border-ember/50 hover:text-ember"
                >
                  See the anatomy
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={750}>
              <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-mist/80">
                v1.0.4 <span className="text-line">/</span> MIT{" "}
                <span className="text-line">/</span> 9 KB gzip{" "}
                <span className="text-line">/</span> React + Vite
              </p>
            </Reveal>
          </div>

          {/* right — spec sheet */}
          <Reveal delay={300} className="lg:col-span-5">
            <aside className="border border-line bg-coal/60">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
                  Spec sheet
                </span>
                <span className="h-1.5 w-1.5 bg-ember" />
              </div>
              <dl className="px-5 py-2">
                {SPEC_ROWS.map(([k, v]) => (
                  <div
                    key={k}
                    className="group flex items-center justify-between border-b border-line/50 py-2.5 last:border-b-0"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                      {k}
                    </dt>
                    <dd className="font-mono text-xs text-fog transition-colors duration-200 group-hover:text-ember">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-line px-5 py-5">
                <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.22em] text-mist/70">
                  Preview — index.html
                </p>
                <MiniWireframe />
                <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-mist/50">
                  Hover to identify sections
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 01 — Anatomy index                                                  */
/* ------------------------------------------------------------------ */

const ANATOMY = [
  { num: "01", title: "Navigation", desc: "Fixed bar that earns its border on scroll", tag: "STICKY" },
  { num: "02", title: "Hero", desc: "Asymmetric grid with line-mask reveal", tag: "12-COL" },
  { num: "03", title: "Ticker", desc: "Infinite trait marquee, pausable by taste", tag: "MOTION" },
  { num: "04", title: "Block grid", desc: "Asymmetric bento — never a row of equals", tag: "BENTO" },
  { num: "05", title: "Metrics", desc: "Counters that fire the moment they land in view", tag: "DATA" },
  { num: "06", title: "Quickstart", desc: "One command between zero and deployed", tag: "CLI" },
  { num: "07", title: "Footer", desc: "Quiet, complete, status-aware", tag: "END" },
];

export function Anatomy() {
  return (
    <section id="anatomy" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="01"
          kicker="Anatomy"
          title="Every section, accounted for."
          note="Seven load-bearing bones. Each one swappable, none optional."
        />

        <Reveal>
          <div className="border-b border-line">
            {ANATOMY.map((row, i) => (
              <Reveal key={row.num} delay={i * 60}>
                <a
                  href={`#${["top", "top", "top", "blocks", "metrics", "quickstart", "top"][i]}`}
                  className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-t border-line px-2 py-5 transition-colors duration-200 hover:bg-fog/[0.02] sm:grid-cols-[4rem_1fr_1.1fr_auto_auto] sm:py-6"
                >
                  <span className="font-mono text-xs text-mist transition-colors duration-200 group-hover:text-ember">
                    {row.num}
                  </span>
                  <span className="font-display text-xl font-semibold tracking-tight text-fog sm:text-2xl">
                    {row.title}
                  </span>
                  <span className="hidden text-sm leading-relaxed text-mist sm:block">
                    {row.desc}
                  </span>
                  <span className="hidden border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-mist transition-colors duration-200 group-hover:border-ember/40 group-hover:text-ember sm:block">
                    {row.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1 text-ember opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — Blocks                                                         */
/* ------------------------------------------------------------------ */

const TOKENS = [
  { name: "Ink", hex: "#0A0C0F", swatch: "bg-[#0a0c0f]" },
  { name: "Coal", hex: "#10141A", swatch: "bg-[#10141a]" },
  { name: "Fog", hex: "#E8EBF1", swatch: "bg-[#e8ebf1]" },
  { name: "Ember", hex: "#E8A84C", swatch: "bg-[#e8a84c]" },
  { name: "Sea", hex: "#63D6C2", swatch: "bg-[#63d6c2]" },
];

const MOTIONS = [
  { name: "Line-mask reveals", desc: "headlines rise, never fade" },
  { name: "Scramble decode", desc: "kickers earn their letters" },
  { name: "Count-up metrics", desc: "numbers land on arrival" },
  { name: "Infinite ticker", desc: "traits on a slow loop" },
];

function BlockShell({
  icon,
  tag,
  title,
  copy,
  children,
  className = "",
}: {
  icon: React.ReactNode;
  tag: string;
  title: string;
  copy: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`group flex flex-col border border-line bg-panel/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/30 hover:bg-panel sm:p-7 ${className}`}
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="text-ember">{icon}</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-mist/70 transition-colors duration-200 group-hover:text-ember/80">
          {tag}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight text-fog sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-mist">{copy}</p>
      {children && <div className="mt-auto pt-7">{children}</div>}
    </article>
  );
}

export function Blocks() {
  return (
    <section id="blocks" className="scroll-mt-24 border-t border-line/70 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="02"
          kicker="Blocks"
          title="Blocks, not boilerplate."
          note="Four of the eighteen. Every one rendered on a 12-column grid."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <BlockShell
              icon={<GridIcon />}
              tag="Self-referential"
              title="A page that explains itself"
              copy="This block is rendering the page you're reading. Swap the wireframe for a product shot and the skeleton holds its shape — the proportions were drawn first."
              className="h-full"
            >
              <div className="border border-line/70 bg-ink/60 p-5">
                <MiniWireframe />
              </div>
            </BlockShell>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <BlockShell
              icon={<PaletteIcon />}
              tag="Theming"
              title="Dark-first tokens"
              copy="Five tokens carry the whole theme. Ink grounds, coal lifts, fog speaks, ember points, sea confirms."
              className="h-full"
            >
              <ul className="space-y-2.5">
                {TOKENS.map((t) => (
                  <li
                    key={t.name}
                    className="group/token flex items-center gap-3 transition-transform duration-200 hover:translate-x-1"
                  >
                    <span
                      className={`h-7 w-7 shrink-0 border border-line ${t.swatch}`}
                    />
                    <span className="w-14 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                      {t.name}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.12em] text-mist transition-colors duration-200 group-hover/token:text-ember">
                      {t.hex}
                    </span>
                  </li>
                ))}
              </ul>
            </BlockShell>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <BlockShell
              icon={<TypeIcon />}
              tag="Type"
              title="Three voices, one system"
              copy="Space Grotesk headlines, Instrument Sans body, JetBrains Mono metadata — tuned to sit on dark without glare."
              className="h-full"
            >
              <ul className="divide-y divide-line/60 border-y border-line/60">
                {[
                  ["Aa", "Space Grotesk", "Display", "font-display"],
                  ["Aa", "Instrument Sans", "Body", "font-body"],
                  ["Aa", "JetBrains Mono", "Code", "font-mono"],
                ].map(([glyph, name, role, cls]) => (
                  <li key={name} className="flex items-center gap-4 py-3">
                    <span className={`${cls} w-10 text-2xl text-fog`}>{glyph}</span>
                    <span className="flex-1 text-sm text-fog">{name}</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </BlockShell>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <BlockShell
              icon={<MotionIcon />}
              tag="Motion"
              title="A strict motion diet"
              copy="Four signatures, used on purpose. Everything honors prefers-reduced-motion and falls back to stillness gracefully."
              className="h-full"
            >
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {MOTIONS.map((m) => (
                  <li key={m.name} className="group/motion flex items-baseline gap-3">
                    <Check className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-sea" />
                    <span>
                      <span className="block text-sm font-medium text-fog">{m.name}</span>
                      <span className="font-mono text-[10px] lowercase tracking-[0.08em] text-mist">
                        — {m.desc}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </BlockShell>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 03 — Metrics                                                        */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: 18, suffix: "", label: "Blocks shipped" },
  { value: 9, suffix: " KB", label: "Gzipped weight" },
  { value: 100, suffix: "", label: "Lighthouse score" },
  { value: 0, suffix: "", label: "Dependencies" },
];

function Stat({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const n = useCountUp(value, start);
  return (
    <div className="bg-ink p-8 sm:p-10">
      <p className="font-display text-5xl font-bold tracking-tight text-fog sm:text-6xl">
        {n}
        {suffix && <span className="text-2xl text-ember sm:text-3xl">{suffix}</span>}
      </p>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">{label}</p>
    </div>
  );
}

export function Metrics() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <section id="metrics" className="scroll-mt-24 border-t border-line/70 bg-coal/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="03"
          kicker="Metrics"
          title="Numbers that arrive on time."
          note="Measured on the skeleton itself — this very page."
        />
        <Reveal>
          <div ref={ref} className="grid grid-cols-2 gap-px border border-line bg-line/60 lg:grid-cols-4">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} start={inView} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 04 — Quickstart                                                     */
/* ------------------------------------------------------------------ */

const COMMANDS = "npx create-skeleton@latest my-page\ncd my-page && npm run dev";

const QUICKSTART_POINTS = [
  "Tokens, type scale & dark theme pre-wired",
  "Reveal, scramble & count-up hooks included",
  "prefers-reduced-motion respected everywhere",
  "One HTML entry — no config maze",
];

export function Quickstart() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COMMANDS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — fail silently */
    }
  };

  return (
    <section id="quickstart" className="scroll-mt-24 border-t border-line/70 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="kicker mb-4">04 / Quickstart</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-fog sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
                Zero to landing
                <br />
                in one command.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
                Scaffold the structure, point it at your idea, and deploy before the coffee cools.
                Everything below the skin is already decided.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="mt-8 space-y-3.5">
                {QUICKSTART_POINTS.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-fog/90">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-sea/40 text-sea">
                      <Check className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="border border-line bg-[#0c0f14] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-ember/50" />
                <span className="ml-3 flex-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                  quickstart — zsh
                </span>
                <button
                  type="button"
                  onClick={copy}
                  className={`flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] transition-all duration-200 ${
                    copied
                      ? "border-sea/50 text-sea"
                      : "border-line text-mist hover:border-ember/50 hover:text-ember"
                  }`}
                >
                  {copied ? <Check className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="p-5 font-mono text-[13px] leading-8 sm:p-6">
                <p className="text-fog">
                  <span className="mr-2 text-ember">$</span>npx create-skeleton@latest{" "}
                  <span className="text-sea">my-page</span>
                </p>
                <p className="text-fog">
                  <span className="mr-2 text-ember">$</span>cd my-page &amp;&amp; npm run dev
                </p>
                <p className="text-mist">
                  <span className="mr-2 text-sea">✔</span>ready in 412 ms — http://localhost:5173
                  <span className="caret ml-2 inline-block h-4 w-2 translate-y-0.5 bg-ember/80" />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 05 — CTA                                                            */
/* ------------------------------------------------------------------ */

export function Cta() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <p
        className="text-outline pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[22vw] font-bold leading-none tracking-tight"
        aria-hidden="true"
      >
        SKELETON
      </p>

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="kicker mb-5">05 / Deploy</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-fog">
              Start from
              <br />
              the <span className="text-ember">bones.</span>
            </h2>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
              MIT licensed <span className="text-line">/</span> no strings{" "}
              <span className="text-line">/</span> no telemetry
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="#quickstart"
                className="group flex items-center justify-center gap-3 bg-ember px-9 py-4 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-emberhi hover:shadow-[0_0_50px_rgba(232,168,76,0.3)]"
              >
                Get Skeleton v1.0
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#anatomy"
                className="group flex items-center justify-center gap-3 border border-line px-9 py-4 font-mono text-xs uppercase tracking-[0.16em] text-fog transition-colors duration-200 hover:border-ember/50 hover:text-ember"
              >
                Read the anatomy
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
