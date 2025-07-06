import Hero from "@/components/Hero";
import About from "@/components/About";
import AreasOfFocus from "@/components/AreasOfFocus";
import FaqSection from "@/components/FAQs";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="
       bg-gray-50">
      <Hero />
      <About />
      <AreasOfFocus />
      <FaqSection />
      <ContactForm />
    </main>
  );
} 