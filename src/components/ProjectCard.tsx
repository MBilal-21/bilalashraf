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
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
          style={{ backgroundImage: `url("${img}")` }}
        />
        <div>
          <p className="text-white text-base font-medium">{title}</p>
          <p className="text-[#9cabba] text-sm">{tech}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;