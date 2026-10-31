"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Reveal } from "@/components/home/motion";
import { navigation, profile, socials } from "@/components/home/content";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GitHubLogoIcon className="size-5" />,
  LinkedIn: <LinkedInLogoIcon className="size-5" />,
  "Hugging Face": <Image src="/icons/hugging-face.svg" alt="" width={20} height={20} className="size-5" />,
};

export default function Footer() {
  return (
    <footer className="bg-accent px-4 pt-16 pb-24 text-on-accent md:px-10 md:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Call to action */}
        <Reveal className="flex flex-col gap-6 border-b border-current/20 pb-12 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-5xl leading-none font-bold uppercase tracking-tight md:text-7xl">
            Have a project
            <br />
            in mind?
          </h2>
          <Link
            href="/#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-on-accent px-7 py-3 font-display text-lg uppercase tracking-wide text-accent transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
            <ArrowUpIcon className="size-4 rotate-45" />
          </Link>
        </Reveal>

        {/* Contact details, pages and socials */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-wider opacity-70">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-2 block font-semibold break-all hover:underline">
              {profile.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider opacity-70">WhatsApp</p>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-2 block font-semibold hover:underline">
              Message me
            </a>
            <p className="mt-1 text-sm opacity-70">Based in {profile.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider opacity-70">Pages</p>
            <ul className="mt-2 space-y-1">
              {[...navigation, { name: "All Projects", href: "/projects" }].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="font-semibold hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider opacity-70">Follow</p>
            <div className="mt-3 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid size-10 place-items-center rounded-full bg-on-accent/10 transition-colors hover:bg-on-accent/20"
                >
                  {socialIcons[s.name]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-current/20 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="opacity-70">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex w-fit items-center gap-2 font-semibold hover:underline"
          >
            Back to top
            <ArrowUpIcon className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
