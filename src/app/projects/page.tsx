import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/components/projects.json";
import { SectionHeading } from "@/components/home/Sections";

const Projects = () => {
  return (
    <>
      <main className="px-4 pt-28 pb-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="All projects" text="Websites, web apps and AI tools I've built." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </main>
      <ContactForm />
    </>
  );
}
export default Projects;
