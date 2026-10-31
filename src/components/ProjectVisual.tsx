import Image from "next/image";
import type { Project } from "./projectData";

// Project image, or a typographic panel built from the tech tags when there is no image.
export default function ProjectVisual({
  project,
  sizes,
  className = "",
}: {
  project: Project;
  sizes: string;
  className?: string;
}) {
  if (project.img) {
    return (
      <Image
        src={project.img}
        alt={project.title}
        fill
        sizes={sizes}
        unoptimized={project.img.endsWith(".svg")}
        className={className.includes("object-contain") ? className : `object-cover ${className}`}
      />
    );
  }

  const tags = project.tech.split(",").map((t) => t.trim());
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden bg-panel ${className}`}>
      <div className="absolute -top-1/4 -right-1/4 size-3/4 rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute inset-0 flex flex-wrap content-start gap-3 p-6 md:p-10">
        {tags.map((t) => (
          <span key={t} className="font-display text-4xl leading-none font-bold uppercase text-white/15 md:text-7xl">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
