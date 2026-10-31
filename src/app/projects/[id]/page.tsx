import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import projects from '@/components/projects.json';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // ⬅ Await params

    // Find the project by id from projects.json
    const project = projects.find(p => p.id === id);

    if (!project) {
        console.log(`Project with id ${id} not found`);
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 pt-28 pb-16">
            <Link
                href="/projects"
                className="text-muted hover:text-accent mb-6 inline-block"
            >
                ← All projects
            </Link>

            <div className="space-y-8">
                {/* Hero Section */}
                <div className="w-full bg-center bg-cover rounded-xl">
                    <Image src={project.img} alt={project.id} width={500} height={400} className='w-full h-auto rounded-xl' />
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                    <div>
                        <h1 className="font-display uppercase tracking-tight text-ink text-4xl md:text-6xl font-bold">{project.title}</h1>
                        <p className="text-muted text-lg mt-2">{project.tech}</p>
                    </div>

                    <div className="flex gap-4">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                rel="noopener noreferrer"
                                className="bg-accent text-on-accent px-6 py-2 rounded-full hover:opacity-85 transition-colors"
                            >
                                View Live
                            </a>
                        )}
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                aria-disabled={true}
                                rel="noopener noreferrer"
                                className="border border-ink text-ink px-6 py-2 rounded-full hover:bg-ink hover:text-bg transition-colors"
                            >
                                View Code
                            </a>
                        )}
                    </div>

                    <div className="max-w-none">
                        <p className="text-muted text-lg">{project.fullDescription}</p>

                        {project.features && (
                            <>
                                <h2 className="font-display uppercase tracking-tight text-ink text-3xl font-bold mt-8 mb-4">Key Features</h2>
                                <ul className="list-disc pl-6 text-muted">
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {project.challenges && (
                            <>
                                <h2 className="font-display uppercase tracking-tight text-ink text-3xl font-bold mt-8 mb-4">Challenges & Solutions</h2>
                                <ul className="list-disc pl-6 text-muted">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    {/* Screenshots */}
                    {project.screenshots && (
                        <div className="space-y-4">
                            <h2 className="font-display uppercase tracking-tight text-ink text-3xl font-bold">Screenshots</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.screenshots.map((screenshot, index) => (
                                    <div
                                        key={index}
                                        className="w-full aspect-video bg-center bg-cover rounded-xl"
                                        style={{ backgroundImage: `url(${screenshot})` }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
