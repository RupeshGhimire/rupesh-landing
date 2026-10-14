import { useEffect, useRef, useState } from "react";
import { PERSON, CONTACT_SOCIALS, EXPERIENCE, TOOLKIT } from "../lib/data";
import { Reveal, useScramble } from "../lib/hooks";
import { SectionHead } from "./chrome";
import { ArrowDown, ArrowUpRight, Check, CopyIcon, LinkedInIcon, MailIcon } from "./icons";
import { Magnetic, Parallax, SpotlightCard } from "./motion";

const SOCIAL_ICON = { linkedin: LinkedInIcon, email: MailIcon };

export function Hero() {
  const kicker = useScramble("DATA ENGINEER · MILWAUKEE, WI");
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
            <p className="kicker mb-8 min-h-[14px]" aria-label="Data engineer in Milwaukee, Wisconsin">
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
                Databricks <span className="text-ember">/</span> Python{" "}
                <span className="text-ember">/</span> cloud data platforms
              </p>
            </Reveal>

            <Reveal delay={520}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-mist sm:text-lg">
                I’m a data engineer working with cloud data platforms since 2018.
                I love working in Databricks and writing Python to build data
                pipelines and cloud data warehouses.
              </p>
            </Reveal>

            <Reveal delay={640}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <a
                    href="#work"
                    className="group flex items-center gap-3 bg-ember px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-emberhi hover:shadow-[0_0_40px_rgba(232,168,76,0.25)]"
                  >
                    My experience
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
                Data engineering <span className="text-line">/</span> since {PERSON.since}
              </p>
            </Reveal>
          </div>

          {/* right — ID card */}
          <Reveal delay={300} className="lg:col-span-5">
            <Parallax strength={14}>
              <aside className="floaty border border-line bg-coal/60 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
                  Rupesh Ghimire
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
                      Data Engineer
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sea" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sea">
                      Milwaukee, WI
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-line/60">
                {CONTACT_SOCIALS.map((s) => {
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

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead index="01" kicker="About" title="About my work." />
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-fog/90 sm:text-xl">
                My work spans data ingestion, cloud warehouses, and the frameworks
                that connect them. At Northwestern Mutual, I build Databricks
                pipelines and reusable ETL components for insurance and wealth data.
              </p>
              <p className="mt-6 text-base leading-relaxed text-mist">
                I enjoy the engineering behind the scenes: making pipelines easier
                to maintain, checking data quality, and finding ways to reduce
                processing time and cost. I also mentor engineers and explore
                how AI tools can help with everyday development.
              </p>
              <p className="mt-8 text-sm leading-relaxed text-mist">
                B.E. in Computer Engineering · Kathmandu University, 2018
              </p>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-5">
            <SpotlightCard className="border border-line bg-coal/60 p-6 sm:p-7">
              <h3 className="kicker mb-6">Tools I work with</h3>
              <dl className="space-y-5">
                {TOOLKIT.map(([label, tools]) => (
                  <div key={label}>
                    <dt className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">{label}</dt>
                    <dd className="text-sm leading-relaxed text-fog">{tools}</dd>
                  </div>
                ))}
              </dl>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-line/70 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead index="02" kicker="Experience" title="Where I’ve worked." />
        <div className="divide-y divide-line/70 border-y border-line/70">
          {EXPERIENCE.map((job, index) => (
            <Reveal key={job.company} delay={index * 80} className="grid gap-6 py-9 sm:py-10 lg:grid-cols-[0.9fr_1.5fr] lg:gap-16">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ember">{job.dates}</p>
                <h3 className="font-display text-xl font-semibold text-fog sm:text-2xl">{job.company}</h3>
                <p className="mt-2 text-sm text-mist">{job.title}</p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-fog/90">{job.description}</p>
                <p className="mt-4 text-sm leading-relaxed text-mist">{job.highlight}</p>
                <p className="mt-5 font-mono text-[10px] leading-relaxed tracking-[0.06em] text-ember/90">{job.tools}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <a href={PERSON.resume} download="Rupesh-Resume-2026.pdf" className="group mt-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ember hover:text-emberhi">
            Download my resume <span className="text-mist">PDF</span><ArrowDown className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = async () => {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(PERSON.email);
      setCopyState("copied");
      timer.current = window.setTimeout(() => setCopyState("idle"), 1800);
    } catch { setCopyState("failed"); }
  };
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line/70 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="kicker mb-4">03 / Contact</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-fog sm:text-4xl">Get in touch<span className="text-ember">.</span></h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
                Want to talk about a data engineering role, Databricks, or Python?
                Send me an email or connect on LinkedIn.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <a href={`mailto:${PERSON.email}`} className="mt-8 inline-block break-all font-display text-xl text-fog transition-colors hover:text-ember sm:text-2xl">{PERSON.email}</a>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Magnetic><a href={`mailto:${PERSON.email}`} className="inline-flex items-center gap-3 bg-ember px-6 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-ink hover:bg-emberhi"><MailIcon className="h-3.5 w-3.5" />Send an email</a></Magnetic>
                <button type="button" onClick={copy} className="inline-flex items-center gap-3 border border-line px-6 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-fog hover:border-ember/50 hover:text-ember">
                  {copyState === "copied" ? <Check className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />} {copyState === "copied" ? "Copied" : "Copy address"}
                </button>
              </div>
              <p role="status" className="mt-3 text-sm text-mist">{copyState === "failed" ? "Couldn’t copy automatically. Select the email address above to copy it." : copyState === "copied" ? "Email address copied." : ""}</p>
              <a href={PERSON.linkedin} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-3 text-sm text-mist hover:text-ember"><LinkedInIcon className="h-4 w-4" />Connect on LinkedIn<ArrowUpRight className="h-3.5 w-3.5" /></a>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <SpotlightCard className="border border-line bg-panel p-7 sm:p-9">
              <p className="kicker mb-5">Resume</p>
              <h3 className="font-display text-2xl font-semibold text-fog">My experience in more detail.</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist">The full work history, technical skills, and education behind this page.</p>
              <a href={PERSON.resume} download="Rupesh-Resume-2026.pdf" className="mt-7 inline-flex items-center gap-3 border border-ember/40 px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-ember hover:bg-ember hover:text-ink">Download resume<ArrowDown className="h-3.5 w-3.5" /></a>
              <p className="mt-4 font-mono text-[10px] tracking-[0.1em] text-mist">PDF · 3 pages</p>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
