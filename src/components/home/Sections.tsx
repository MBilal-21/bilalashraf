"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ProjectVisual from "@/components/ProjectVisual";
import { featuredProjects, plainTitle } from "@/components/projectData";
import Accordion from "./Accordion";
import { Counter, Reveal } from "./motion";
import { awards, certifications, experience, faqs, insights, profile, services, showInsights, socials, stats } from "./content";

export function SectionHeading({ title, text }: { title: string; text?: string }) {
  return (
    <Reveal>
      <h2 className="font-display text-5xl leading-none font-bold uppercase tracking-tight text-ink md:text-6xl">{title}</h2>
      {text && <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">{text}</p>}
    </Reveal>
  );
}

export function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-accent px-5 py-1.5 font-display text-sm uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-on-accent"
    >
      {children}
    </Link>
  );
}

export function Services() {
  return (
    <section id="services" className="px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <SectionHeading
          title="What I can do for you"
          text="I build web platforms, AI integrations and websites that are fast, reliable and easy to maintain."
        />
        <Reveal delay={0.1}>
          <Accordion
            numbered
            items={services.map((s) => ({
              title: s.title,
              body: (
                <>
                  <p>{s.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full bg-soft px-3 py-1 text-xs text-ink">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              ),
            }))}
          />
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [8, -4]);

  return (
    <section id="about" className="px-4 py-20 md:px-10 md:py-28">
      <div ref={ref} className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            title="About me"
            text={profile.about}
          />
          <Reveal delay={0.1} className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-5xl font-bold text-accent md:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs font-semibold text-ink md:text-sm">{s.label}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="mt-10 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-ink">Location</p>
              <p className="text-muted">{profile.location}</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Email</p>
              <a href={`mailto:${profile.email}`} className="text-muted hover:text-accent">
                {profile.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-5">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink underline-offset-4 hover:text-accent hover:underline">
                {s.name}
              </a>
            ))}
          </Reveal>
          <Reveal delay={0.25} className="mt-8">
            <PillLink href={profile.whatsapp}>Let&apos;s talk</PillLink>
          </Reveal>
        </div>
        <motion.div style={{ rotate }} className="mx-auto w-4/5 max-w-sm overflow-hidden rounded-3xl shadow-2xl md:w-full">
          <Image src="/assets/images/site/about.jpg" alt="Bilal Ashraf" width={800} height={849} className="h-auto w-full" />
        </motion.div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Featured projects"
          text="Production work, AI research and full-stack builds. More on the all projects page."
        />
        {/* Cards stick to the top and stack over each other as you scroll */}
        <div className="mt-12 flex flex-col gap-8">
          {featuredProjects.map((p, i) => (
            <div key={p.id} className="sticky" style={{ top: `${96 + i * 16}px` }}>
              <Reveal>
                <Link
                  href={`/projects/${p.id}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-panel sm:aspect-[16/10] md:aspect-[16/8]"
                >
                  <ProjectVisual
                    project={p}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-6 text-center text-white md:p-12">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs text-on-accent">{p.tech}</span>
                    <h3 className="mt-4 font-display text-4xl leading-none font-bold uppercase tracking-tight md:text-6xl">
                      {plainTitle(p.title)}
                    </h3>
                    {p.description && <p className="mt-3 max-w-xl text-sm text-white/80">{p.description}</p>}
                  </div>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <PillLink href="/projects">Browse all projects</PillLink>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <SectionHeading
          title="Frequently asked questions"
          text="Answers to the questions I get most often. If yours isn't here, feel free to message me."
        />
        <Reveal delay={0.1}>
          <Accordion numbered items={faqs.map((f) => ({ title: f.q, body: <p>{f.a}</p> }))} />
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.4fr]">
        <SectionHeading title="Experience" text="Full-time product work since June 2026, and client projects before that." />
        <div className="flex flex-col gap-6">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.1}>
              <article className="rounded-2xl bg-soft p-6 md:p-8">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <h3 className="font-display text-2xl leading-tight uppercase tracking-tight text-ink md:text-3xl">
                    {job.role}
                    {job.company && (
                      <>
                        {", "}
                        <a href={job.companyHref} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                          {job.company}
                        </a>
                      </>
                    )}
                  </h3>
                  <p className="shrink-0 text-sm text-muted">
                    {job.period} · {job.mode}
                  </p>
                </div>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/85 marker:text-accent md:text-base">
                  {job.points.map((pt) =>
                    typeof pt === "string" ? (
                      <li key={pt}>{pt}</li>
                    ) : (
                      <li key={pt.name}>
                        <a href={pt.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline-offset-4 hover:text-accent hover:underline">
                          {pt.name}
                        </a>
                        : {pt.text}
                      </li>
                    ),
                  )}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Certifications & awards" />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-xl uppercase tracking-wide text-muted">Certifications</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {certifications.map((c) => (
                <li key={c.name}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 py-4">
                    <span>
                      <span className="block font-semibold text-ink transition-colors group-hover:text-accent">{c.name}</span>
                      <span className="text-sm text-muted">{c.issuer}</span>
                    </span>
                    <span className="shrink-0 text-sm text-muted">{c.date} ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-display text-xl uppercase tracking-wide text-muted">Awards</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {awards.map((a) => (
                <li key={a.name} className="flex items-start justify-between gap-4 py-4">
                  <span>
                    <span className="block font-semibold text-ink">{a.name}</span>
                    <span className="text-sm text-muted">{a.issuer}</span>
                  </span>
                  <span className="shrink-0 text-sm text-muted">{a.date}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Hidden while `showInsights` is false in content.ts.
export function Insights() {
  if (!showInsights) return null;
  return (
    <section id="insights" className="px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Insights & ideas"
          text="Notes on web development, AI tools and what I learn while building projects."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {insights.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <article className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-soft">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs">
                  <span className="rounded-full border border-accent px-2.5 py-0.5 text-accent">{post.tag}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl leading-tight uppercase tracking-tight text-ink transition-colors group-hover:text-accent md:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{post.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
