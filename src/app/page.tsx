import ContactForm from "@/components/ContactForm";
import Hero from "@/components/home/Hero";
import { About, Certifications, Experience, Faq, Insights, Projects, Services } from "@/components/home/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Certifications />
      <Experience />
      <Projects />
      <Faq />
      <Insights />
      <ContactForm />
    </main>
  );
}
