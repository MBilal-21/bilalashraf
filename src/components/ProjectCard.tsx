"use client";
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  tech: string;
  img: string;
  description?: string;
}

const ProjectCard = ({ id, title, tech, img }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${id}`} className="group">
      <div className="flex flex-col gap-3 pb-3 transition-transform duration-300 hover:-translate-y-2">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl bg-soft"
          style={{ backgroundImage: `url("${img}")` }}
        />
        <div>
          <p className="font-display uppercase tracking-tight text-ink text-xl group-hover:text-accent transition-colors">{title}</p>
          <p className="text-muted text-sm">{tech}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;