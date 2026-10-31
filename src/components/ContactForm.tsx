"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/home/motion";
import { profile, services } from "@/components/home/content";

type Status = { type: "success" | "error"; text: string } | null;

const SCRIPT_URL = process.env.NEXT_PUBLIC_SCRIPT_URL;
const sentText = "Thanks! Your message was sent. I'll get back to you soon.";

const inputClass =
    "w-full rounded-xl border border-line bg-soft px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted hover:border-muted focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<Status>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const form = e.currentTarget;
        const data = new FormData(form);
        const field = (key: string) => String(data.get(key) ?? "").trim();

        // Hidden honeypot field: real visitors never fill it, spam bots usually do.
        if (field("website")) {
            form.reset();
            setStatus({ type: "success", text: sentText });
            setLoading(false);
            return;
        }

        const name = field("name");
        const email = field("email");
        const service = field("service");
        const text = field("message");
        // The script only stores name/email/message, so the chosen service is prepended to the message.
        const message = service ? `[${service}] ${text}` : text;

        try {
            if (!SCRIPT_URL) throw new Error("Contact form is not configured (NEXT_PUBLIC_SCRIPT_URL is missing).");

            // Posted straight to the Google Apps Script because the site is a static export with no API server.
            // A text/plain body keeps this a "simple" CORS request, so the browser skips the preflight Apps Script can't answer.
            const res = await fetch(SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({ name, email, message }),
            });
            if (!res.ok) throw new Error(`Server responded with ${res.status}`);

            setStatus({ type: "success", text: sentText });
            form.reset();
        } catch (err: unknown) {
            console.error(err);
            setStatus({
                type: "error",
                text: `Sorry, your message couldn't be sent${err instanceof Error ? ` (${err.message})` : ""}. Please email me directly at ${profile.email}.`,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="px-4 py-20 md:px-10 md:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
                <Reveal className="relative mx-auto w-full max-w-sm">
                    <div className="overflow-hidden rounded-3xl shadow-2xl">
                        <Image src="/assets/images/site/contact.jpg" alt="Bilal Ashraf" width={800} height={1000} className="h-auto w-full" />
                    </div>
                    <div className="absolute -top-4 -right-2 md:-right-4 flex items-center gap-2 rounded-full bg-soft px-3 py-1.5 text-xs text-ink shadow-lg">
                        <span className="size-2 animate-pulse rounded-full bg-live" />
                        Available for work
                    </div>
                    <motion.div
                        animate={{ rotate: [0, 18, -8, 18, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.5 }}
                        className="absolute -bottom-6 -left-3 md:-left-6 grid size-20 place-items-center rounded-full bg-accent text-3xl shadow-xl"
                        aria-hidden
                    >
                        👋
                    </motion.div>
                </Reveal>

                <Reveal delay={0.1}>
                    <h2 className="font-display text-5xl leading-none font-bold uppercase tracking-tight text-ink md:text-6xl">
                        Let&apos;s work together
                    </h2>
                    <p className="mt-4 max-w-md text-sm text-muted md:text-base">
                        Have a website, app or AI tool in mind? Tell me about it and I&apos;ll reply within a day.
                    </p>
                    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="block">
                                <span className="mb-2 block text-xs font-medium text-muted">Name</span>
                                <input name="name" required placeholder="Your name" className={inputClass} />
                            </label>
                            <label className="block">
                                <span className="mb-2 block text-xs font-medium text-muted">Email</span>
                                <input type="email" name="email" required placeholder="you@example.com" className={inputClass} />
                            </label>
                        </div>
                        <label className="block">
                            <span className="mb-2 block text-xs font-medium text-muted">Service needed</span>
                            <div className="relative">
                                <select name="service" defaultValue="" className={`${inputClass} cursor-pointer appearance-none pr-10`}>
                                    <option value="">Select a service…</option>
                                    {services.map((s) => (
                                        <option key={s.title}>{s.title}</option>
                                    ))}
                                    <option>Something else</option>
                                </select>
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden
                                    className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted">
                                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </label>
                        <label className="block">
                            <span className="mb-2 block text-xs font-medium text-muted">Message</span>
                            <textarea name="message" required placeholder="Tell me about your project…"
                                className={`${inputClass} min-h-36 resize-y`} />
                        </label>
                        <button type="submit" disabled={loading}
                            className="rounded-full border border-accent px-8 py-2 font-display text-sm uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-on-accent disabled:opacity-60">
                            {loading ? "Sending..." : "Submit"}
                        </button>
                        <p aria-live="polite" className={`text-sm ${status?.type === "error" ? "text-red-500" : "text-green-500"}`}>
                            {status?.text}
                        </p>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
