"use client";

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            const result = await res.json();

            if (result.status === "success") {
                alert("✅ Message sent successfully!");
                form.reset();
            } else {
                alert("❌ Failed: " + result.message);
            }
        } catch (err: unknown) {
            console.error(err);
            if (err instanceof Error) {
                alert(`❌ Error: ${err.message}`);
            } else {
                alert("❌ An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-4xl mx-auto" id="contact">
            <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Contact</h2>
            <form className="space-y-4 px-4 pb-8" onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-4">
                    <label className="flex flex-col min-w-40 flex-1">
                        <span className="text-white text-base font-medium pb-2">Your Name</span>
                        <input name="name" required placeholder="Enter your name"
                            className="form-input rounded-xl text-white bg-[#283139] h-14 p-4 text-base" />
                    </label>
                    <label className="flex flex-col min-w-40 flex-1">
                        <span className="text-white text-base font-medium pb-2">Your Email</span>
                        <input type="email" name="email" required placeholder="Enter your email"
                            className="form-input rounded-xl text-white bg-[#283139] h-14 p-4 text-base" />
                    </label>
                </div>
                <label className="flex flex-col min-w-40 flex-1">
                    <span className="text-white text-base font-medium pb-2">Your Message</span>
                    <textarea name="message" required placeholder="Enter your message"
                        className="form-input rounded-xl text-white bg-[#283139] min-h-36 p-4 text-base" />
                </label>
                <div className="flex justify-end">
                    <button type="submit" disabled={loading}
                        className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 bg-[#0b80ee] text-white text-sm font-bold disabled:opacity-60">
                        {loading ? "Sending..." : "Send"}
                    </button>
                </div>
            </form>
        </section>
    );
}
