import ContactForm from "@/components/ContactForm";
import Hero from "@/components/home/Hero";
import { About, Faq, Insights, Projects, Services, Testimonials } from "@/components/home/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Faq />
      <Insights />
      <ContactForm />
    </main>
  );
}
