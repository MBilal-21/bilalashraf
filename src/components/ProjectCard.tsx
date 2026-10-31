import Link from "next/link";
import ProjectVisual from "./ProjectVisual";
import type { Project } from "./projectData";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={`/projects/${project.id}`} className="group">
      <div className="flex flex-col gap-3 pb-3 transition-transform duration-300 hover:-translate-y-2">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-soft">
          <ProjectVisual project={project} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        </div>
        <div>
          <p className="font-display text-xl uppercase tracking-tight text-ink transition-colors group-hover:text-accent">
            {project.title}
          </p>
          <p className="text-sm text-muted">{project.tech}</p>
          {project.description && <p className="mt-2 text-sm text-ink/80">{project.description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
