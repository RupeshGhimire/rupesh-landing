import { useEffect, useState } from "react";
import { PERSON, SOCIALS } from "../lib/data";
import { Reveal } from "../lib/hooks";
import {
  ArrowUpRight,
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  LogoMark,
  MailIcon,
  MenuIcon,
  Spark,
} from "./icons";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Numbers", href: "#numbers" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Rupesh Ghimire — back to top">
          <span className="text-fog transition-transform duration-300 group-hover:scale-110">
            <LogoMark className="h-6 w-6" />
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-fog">
            RUPESH&nbsp;GHIMIRE
          </span>
          <sup className="font-mono text-[9px] tracking-widest text-mist">@rg</sup>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition-colors duration-200 hover:text-fog"
            >
              <span className="absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 bg-ember opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PERSON.email}`}
            className="hidden border border-ember/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ember transition-all duration-200 hover:bg-ember hover:text-ink sm:block"
          >
            Say hi
          </a>
          <button
            type="button"
            className="text-mist transition-colors hover:text-fog md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-line bg-ink/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4" aria-label="Mobile">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/50 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-mist transition-colors last:border-b-0 hover:text-ember"
              >
                <span>
                  <span className="mr-3 text-ember/60">0{i + 1}</span>
                  {l.label}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
            <a
              href={`mailto:${PERSON.email}`}
              className="mt-4 flex items-center justify-center gap-2 border border-ember/40 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ember"
            >
              <MailIcon className="h-3.5 w-3.5" /> Say hi
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

const TICKER_ITEMS = [
  "Rupesh Ghimire",
  "@RupeshGhimire",
  "GitHub — 14 repos",
  "Since 2015",
  "Open source",
  "Web development",
  "Open to connect",
  "rupacegh@gmail.com",
];

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-line/70 bg-coal/40" aria-hidden="true">
      <div className="marquee-track flex w-max items-center py-3.5">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-[11px] uppercase tracking-[0.24em] text-mist"
          >
            <span className="px-6">{item}</span>
            <Spark className="h-1.5 w-1.5 text-ember/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHead({
  index,
  kicker,
  title,
  note,
}: {
  index: string;
  kicker: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
      <div>
        <p className="kicker mb-4">
          {index} / {kicker}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-fog sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
          {title}
        </h2>
      </div>
      {note && (
        <p className="max-w-[240px] pb-1.5 font-mono text-[10px] uppercase leading-[1.9] tracking-[0.14em] text-mist">
          {note}
        </p>
      )}
    </Reveal>
  );
}

const FOOTER_INDEX = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Numbers", href: "#numbers" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_ICON = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <a href="#top" className="flex items-center gap-2.5">
              <LogoMark className="h-6 w-6 text-fog" />
              <span className="font-display text-sm font-semibold tracking-[0.18em] text-fog">
                RUPESH&nbsp;GHIMIRE
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              Personal corner of the internet — the work, the links, and the fastest way to say
              hello. Built with React, Vite &amp; Tailwind.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sea" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                Open to connect
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="kicker mb-5 !text-[10px] text-mist">Index</p>
            <ul className="space-y-3">
              {FOOTER_INDEX.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-fog"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-ember" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="kicker mb-5 !text-[10px] text-mist">Elsewhere</p>
            <ul className="space-y-3">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICON[s.kind];
                return (
                  <li key={s.kind}>
                    <a
                      href={s.href}
                      target={s.kind === "email" ? undefined : "_blank"}
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-mist transition-colors hover:text-fog"
                    >
                      <Icon className="h-3.5 w-3.5 transition-colors group-hover:text-ember" />
                      {s.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-ember" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
            © {new Date().getFullYear()} Rupesh Ghimire
          </p>
          <a
            href="#top"
            className="group font-mono text-[10px] uppercase tracking-[0.18em] text-mist transition-colors hover:text-ember"
          >
            Back to top{" "}
            <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
