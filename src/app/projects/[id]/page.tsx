import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProjectVisual from "@/components/ProjectVisual";
import { projectLinks, projects } from "@/components/projectData";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return { title: `${project.title} | Bilal Ashraf`, description: project.description };
}

const h2 = "font-display uppercase tracking-tight text-ink text-3xl font-bold mt-10 mb-4";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const links = projectLinks(project);
  // The hero image already shows the first screenshot when they are the same file.
  const screenshots = project.screenshots?.filter((s) => s !== project.img);
  const phone = project.screenshotsLayout === "phone";

  return (
    <div className="mx-auto max-w-4xl px-4 pt-28 pb-16">
      <Link href="/projects" className="mb-6 inline-block text-muted hover:text-accent">
        ← All projects
      </Link>

      <div className="space-y-8">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-soft">
          <ProjectVisual project={project} sizes="(max-width: 896px) 100vw, 896px" className="object-contain" />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-6xl">{project.title}</h1>
            <p className="mt-2 text-lg text-muted">{project.tech}</p>
          </div>

          {links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === 0
                      ? "rounded-full bg-accent px-6 py-2 text-on-accent transition-opacity hover:opacity-85"
                      : "rounded-full border border-ink px-6 py-2 text-ink transition-colors hover:bg-ink hover:text-bg"
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}

          {project.video && (
            <figure>
              <video
                controls
                preload="metadata"
                playsInline
                poster={project.video.poster}
                className="w-full rounded-xl bg-black"
              >
                <source src={project.video.src} type="video/mp4" />
              </video>
              {project.video.caption && <figcaption className="mt-2 text-sm text-muted">{project.video.caption}</figcaption>}
            </figure>
          )}

          <div>
            <p className="text-lg text-muted">{project.fullDescription}</p>

            {project.features && (
              <>
                <h2 className={h2}>{project.featuresTitle ?? "Key Features"}</h2>
                <ul className="list-disc space-y-1 pl-6 text-muted">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {project.challenges && (
              <>
                <h2 className={h2}>Challenges & Solutions</h2>
                <ul className="list-disc space-y-1 pl-6 text-muted">
                  {project.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {screenshots && screenshots.length > 0 && (
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink">
                {project.screenshotsTitle ?? "Screenshots"}
              </h2>
              <div className={phone ? "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4" : "grid grid-cols-1 gap-4 md:grid-cols-2"}>
                {screenshots.map((screenshot) => (
                  <a
                    key={screenshot}
                    href={screenshot}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative block w-full overflow-hidden rounded-xl bg-soft ${phone ? "aspect-[9/16]" : "aspect-video"}`}
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} ${project.screenshotsTitle ? "diagram" : "screenshot"}`}
                      fill
                      sizes={phone ? "(max-width: 768px) 50vw, 224px" : "(max-width: 768px) 100vw, 448px"}
                      unoptimized={screenshot.endsWith(".svg")}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
