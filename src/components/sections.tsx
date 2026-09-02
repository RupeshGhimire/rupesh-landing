import { useEffect, useState, type ReactNode } from "react";
import { PERSON, SOCIALS } from "../lib/data";
import { Reveal, useCountUp, useInView, useScramble } from "../lib/hooks";
import { SectionHead } from "./chrome";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CopyIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  StarIcon,
} from "./icons";
import { Magnetic, Parallax, SpotlightCard, Tilt } from "./motion";

const SOCIAL_ICON = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
};

/* ------------------------------------------------------------------ */
/* 00 — Hero                                                           */
/* ------------------------------------------------------------------ */

export function Hero() {
  const kicker = useScramble("PERSONAL SITE — RUPESH GHIMIRE");
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* corner registration marks */}
      <span className="pointer-events-none absolute left-6 top-24 hidden font-mono text-sm text-line lg:block" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute right-6 top-24 hidden font-mono text-sm text-line lg:block" aria-hidden="true">+</span>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* left — introduction */}
          <div className="lg:col-span-7">
            <p className="kicker mb-8 min-h-[14px]" aria-label="Personal site — Rupesh Ghimire">
              {kicker}
            </p>

            <h1 className="font-display text-[clamp(3.2rem,10vw,6.75rem)] font-bold leading-[0.96] tracking-[-0.03em] text-fog">
              <span className="mask-line">
                <span style={{ animationDelay: "0.1s" }}>Rupesh</span>
              </span>
              <span className="mask-line">
                <span style={{ animationDelay: "0.24s" }}>
                  Ghimire<span className="text-ember">.</span>
                </span>
              </span>
            </h1>

            <Reveal delay={420}>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
                Software developer <span className="text-ember">/</span> web{" "}
                <span className="text-ember">/</span> open source
              </p>
            </Reveal>

            <Reveal delay={520}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-mist sm:text-lg">
                Software developer. Shipping on GitHub since 2015 — repos, tools, and the
                occasional experiment.
              </p>
            </Reveal>

            <Reveal delay={640}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <a
                    href="#work"
                    className="group flex items-center gap-3 bg-ember px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-emberhi hover:shadow-[0_0_40px_rgba(232,168,76,0.25)]"
                  >
                    See my work
                    <ArrowDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href={`mailto:${PERSON.email}`}
                    className="group flex items-center gap-3 border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-fog transition-colors duration-200 hover:border-ember/50 hover:text-ember"
                  >
                    <MailIcon className="h-3.5 w-3.5" />
                    Get in touch
                  </a>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={780}>
              <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-mist/80">
                @{PERSON.handle} <span className="text-line">/</span> est. {PERSON.since}{" "}
                <span className="text-line">/</span> {PERSON.publicRepos} public repos
              </p>
            </Reveal>
          </div>

          {/* right — ID card */}
          <Reveal delay={300} className="lg:col-span-5">
            <Parallax strength={14}>
              <aside className="floaty border border-line bg-coal/60 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
                  ID — profile.png
                </span>
                <span className="h-1.5 w-1.5 bg-ember" />
              </div>

              <div className="group relative overflow-hidden border-b border-line">
                {photoOk ? (
                  <img
                    src={PERSON.photo}
                    alt="Portrait of Rupesh Ghimire"
                    loading="eager"
                    onError={() => setPhotoOk(false)}
                    className="aspect-square w-full object-cover grayscale-[25%] contrast-[1.05] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center bg-panel font-display text-8xl font-bold text-ember/70">
                    RG
                  </div>
                )}
                {/* duotone wash */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                {/* corner ticks */}
                <span className="pointer-events-none absolute left-3 top-3 font-mono text-xs text-fog/40">+</span>
                <span className="pointer-events-none absolute right-3 top-3 font-mono text-xs text-fog/40">+</span>
                {/* caption strip */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight text-fog">
                      {PERSON.name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                      @{PERSON.handle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sea" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sea">
                      Available
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px bg-line/60">
                {SOCIALS.map((s) => {
                  const Icon = SOCIAL_ICON[s.kind];
                  return (
                    <a
                      key={s.kind}
                      href={s.href}
                      target={s.kind === "email" ? undefined : "_blank"}
                      rel="noreferrer"
                      aria-label={s.label}
                      className="group flex flex-col items-center gap-2 bg-panel py-5 transition-colors duration-200 hover:bg-coal"
                    >
                      <Icon className="h-4 w-4 text-mist transition-colors duration-200 group-hover:text-ember" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist transition-colors duration-200 group-hover:text-fog">
                        {s.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </aside>
            </Parallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 01 — About                                                          */
/* ------------------------------------------------------------------ */

const ABOUT_ROWS: Array<[string, ReactNode]> = [
  ["Name", "Rupesh Ghimire"],
  ["Handle", "@RupeshGhimire"],
  ["Email", "rupacegh@gmail.com"],
  ["GitHub", "since 2015"],
  ["Repos", "14 public"],
  [
    "Status",
    <span key="s" className="flex items-center gap-2 text-sea">
      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sea" />
      Open to connect
    </span>,
  ],
];

const ABOUT_POINTS = [
  "Projects pulled live from GitHub",
  "Direct links, nothing in between",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="01"
          kicker="About"
          title="The short version."
          note="Facts only. Everything links somewhere real."
        />

        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-fog/90 sm:text-xl">
                I build things that are clean, useful, and <span className="text-ember">actually
                finished</span>. Code lives public on GitHub — experiments included.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-9 space-y-3.5">
                {ABOUT_POINTS.map((p) => (
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

          <Reveal delay={180} className="lg:col-span-5">
            <SpotlightCard className="border border-line bg-coal/60">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
                  Facts — facts.json
                </span>
                <span className="h-1.5 w-1.5 bg-ember" />
              </div>
              <dl className="px-5 py-2">
                {ABOUT_ROWS.map(([k, v]) => (
                  <div
                    key={k}
                    className="group flex items-center justify-between gap-4 border-b border-line/50 py-3 last:border-b-0"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                      {k}
                    </dt>
                    <dd className="text-right font-mono text-xs text-fog transition-colors duration-200 group-hover:text-ember">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-line px-5 py-4">
                <p className="font-mono text-[9px] uppercase leading-[1.8] tracking-[0.18em] text-mist/60">
                  Every row routes somewhere real.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — Work (live from the GitHub API)                                */
/* ------------------------------------------------------------------ */

type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
  fork: boolean;
};

const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  Shell: "#89e051",
  "Jupyter Notebook": "#da5b0b",
  Dart: "#00b4ab",
  Kotlin: "#a97bff",
  Go: "#00add8",
  Rust: "#dea584",
  PHP: "#4f5d95",
};

function formatUpdated(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function RepoCard({ repo, index }: { repo: Repo; index: number }) {
  const langColor = (repo.language && LANG_COLORS[repo.language]) || "var(--color-ember)";
  return (
    <Reveal delay={index * 70} className="h-full">
      <Tilt className="h-full">
        <SpotlightCard className="h-full">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full flex-col border border-line bg-panel/60 p-6 transition-colors duration-300 hover:border-ember/30 hover:bg-panel"
          >
        <div className="mb-5 flex items-start justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/70">
            repo / {String(index + 1).padStart(2, "0")}
          </p>
          <ArrowUpRight className="h-4 w-4 -translate-x-1 text-ember opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
        </div>
        <h3 className="font-display text-xl font-semibold tracking-tight text-fog transition-colors duration-200 group-hover:text-emberhi">
          {repo.name}
        </h3>
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-mist">
          {repo.description || "No description — the code speaks for itself."}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line/60 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-mist">
          {repo.language && (
            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: langColor }}
              />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <StarIcon className="h-3 w-3" />
            {repo.stargazers_count}
          </span>
          <span className="ml-auto normal-case tracking-normal">
            updated {formatUpdated(repo.updated_at)}
          </span>
        </div>
          </a>
        </SpotlightCard>
      </Tilt>
    </Reveal>
  );
}

function WorkSkeleton() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse border border-line bg-panel/40 p-6">
          <div className="mb-6 h-2.5 w-16 bg-fog/10" />
          <div className="h-5 w-32 bg-fog/10" />
          <div className="mt-4 h-3 w-full bg-fog/5" />
          <div className="mt-2 h-3 w-2/3 bg-fog/5" />
          <div className="mt-8 h-2.5 w-24 bg-fog/5" />
        </div>
      ))}
    </div>
  );
}

export function Work() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(PERSON.githubApi, { signal: ctrl.signal, headers: { Accept: "application/vnd.github+json" } })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        return res.json() as Promise<Repo[]>;
      })
      .then((data) => {
        const sorted = data
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              +new Date(b.updated_at) - +new Date(a.updated_at),
          )
          .slice(0, 6);
        setRepos(sorted);
      })
      .catch((err: unknown) => {
        if ((err as Error).name !== "AbortError") setFailed(true);
      });
    return () => ctrl.abort();
  }, []);

  return (
    <section id="work" className="scroll-mt-24 border-t border-line/70 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="02"
          kicker="Work"
          title="Selected repositories."
          note="Live from the GitHub API."
        />

        {repos === null && !failed && <WorkSkeleton />}

        {failed && (
          <Reveal>
            <div className="flex flex-col items-start gap-5 border border-line bg-panel/60 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember">
                  fetch — unavailable
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Live feed is down. Repos are still on the profile.
                </p>
              </div>
              <a
                href={PERSON.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-fog transition-colors duration-200 hover:border-ember/50 hover:text-ember"
              >
                <GitHubIcon className="h-4 w-4" />
                Open GitHub
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        )}

        {repos !== null && !failed && (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, i) => (
                <RepoCard key={repo.name} repo={repo} index={i} />
              ))}
            </div>
            <Reveal delay={200}>
              <a
                href={PERSON.github}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-mist transition-colors duration-200 hover:text-ember"
              >
                Browse all {PERSON.publicRepos} repositories
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 03 — Numbers                                                        */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: 14, suffix: "", label: "Public repositories" },
  { value: 10, suffix: "+", label: "Years on GitHub" },
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

export function Numbers() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <section id="numbers" className="scroll-mt-24 border-t border-line/70 bg-coal/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="03"
          kicker="Numbers"
          title="By the numbers."
          note="Straight from the GitHub API."
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
/* 04 — Contact                                                        */
/* ------------------------------------------------------------------ */

const CONTACT_LINES = [
  { label: "GitHub", value: "github.com/RupeshGhimire", href: PERSON.github, external: true },
  { label: "LinkedIn", value: "in/rupesh-ghimire", href: PERSON.linkedin, external: true },
  { label: "Email", value: PERSON.email, href: `mailto:${PERSON.email}`, external: false },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PERSON.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — fail silently */
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line/70 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="kicker mb-4">04 / Contact</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-fog sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
                Get in touch<span className="text-ember">.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
                No forms. One address, checked daily.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <a
                    href={`mailto:${PERSON.email}`}
                    className="group flex items-center gap-3 bg-ember px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-emberhi hover:shadow-[0_0_40px_rgba(232,168,76,0.25)]"
                  >
                    <MailIcon className="h-3.5 w-3.5" />
                    Send an email
                  </a>
                </Magnetic>
                <Magnetic>
                  <button
                    type="button"
                    onClick={copy}
                    className={`group flex items-center gap-3 border px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] transition-all duration-200 ${
                      copied
                        ? "border-sea/50 text-sea"
                        : "border-line text-fog hover:border-ember/50 hover:text-ember"
                    }`}
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
                    {copied ? "Copied" : "Copy address"}
                  </button>
                </Magnetic>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <ul className="mt-10 divide-y divide-line/60 border-y border-line/60">
                {CONTACT_LINES.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 py-4 transition-colors duration-200"
                    >
                      <span className="w-20 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                        {l.label}
                      </span>
                      <span className="flex-1 truncate text-right font-mono text-xs text-fog transition-colors duration-200 group-hover:text-ember sm:text-sm">
                        {l.value}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-mist transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <SpotlightCard className="border border-line bg-[#0c0f14] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-ember/50" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                  reach-me — zsh
                </span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-8 sm:p-6">
                <p className="text-fog">
                  <span className="mr-2 text-ember">$</span>whoami
                </p>
                <p className="text-mist">rupesh-ghimire</p>
                <p className="mt-2 text-fog">
                  <span className="mr-2 text-ember">$</span>cat contact.txt
                </p>
                <p className="text-mist">
                  <span className="mr-2 text-sea">→</span>
                  <a
                    href={`mailto:${PERSON.email}`}
                    className="transition-colors hover:text-ember"
                  >
                    {PERSON.email}
                  </a>
                </p>
                <p className="text-mist">
                  <span className="mr-2 text-sea">→</span>
                  <a
                    href={PERSON.github}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-ember"
                  >
                    github.com/RupeshGhimire
                  </a>
                </p>
                <p className="text-mist">
                  <span className="mr-2 text-sea">→</span>
                  <a
                    href={PERSON.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-ember"
                  >
                    linkedin.com/in/rupesh-ghimire
                  </a>
                </p>
                <p className="mt-2 text-fog">
                  <span className="mr-2 text-ember">$</span>cat reply-time
                </p>
                <p className="text-mist">
                  <span className="caret ml-0 inline-block h-4 w-2 translate-y-0.5 bg-ember/80" />
                  <span className="ml-2">~1 day</span>
                </p>
              </div>
            </SpotlightCard>
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
        RUPESH
      </p>

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="kicker mb-5">05 / Next</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-fog">
              Let&rsquo;s make
              <br />
              something<span className="text-ember">.</span>
            </h2>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
              No forms <span className="text-line">/</span> just an inbox
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href={`mailto:${PERSON.email}`}
                className="group flex items-center justify-center gap-3 bg-ember px-9 py-4 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-emberhi hover:shadow-[0_0_50px_rgba(232,168,76,0.3)]"
              >
                <MailIcon className="h-4 w-4" />
                {PERSON.email}
              </a>
              <a
                href={PERSON.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 border border-line px-9 py-4 font-mono text-xs uppercase tracking-[0.16em] text-fog transition-colors duration-200 hover:border-ember/50 hover:text-ember"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub profile
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
