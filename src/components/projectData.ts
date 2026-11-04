import data from "./projects.json";

export type Project = {
  id: string;
  type: string;
  title: string;
  tech: string;
  img?: string;
  /** Position on the home page. Projects without it only appear on /projects. */
  featured?: number;
  liveLink?: string;
  githubLink?: string;
  links?: { label: string; href: string }[];
  description?: string;
  fullDescription: string;
  featuresTitle?: string;
  features?: string[];
  challenges?: string[];
  screenshotsTitle?: string;
  screenshots?: string[];
  /** "phone" shows tall 9:16 screenshots in a denser grid. */
  screenshotsLayout?: "phone";
  video?: { src: string; poster?: string; caption?: string };
};

export const projects = data as Project[];

export const featuredProjects = projects
  .filter((p) => p.featured !== undefined)
  .sort((a, b) => a.featured! - b.featured!);

/** Title without a leading emoji, for large display headings. */
export const plainTitle = (title: string) => title.replace(/^\W+/u, "");

/** Every outbound link for a project, in display order. */
export function projectLinks(p: Project) {
  const out: { label: string; href: string }[] = [];
  if (p.liveLink) out.push({ label: "View Live", href: p.liveLink });
  if (p.githubLink) out.push({ label: "View Code", href: p.githubLink });
  return out.concat(p.links ?? []);
}
