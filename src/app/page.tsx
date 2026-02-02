import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import GallerySection from "@/components/organisms/GallerySection";
import ContactSection from "@/components/organisms/ContactSection";
import { SITE } from "@/constants/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-primary/40 text-xs tracking-wider border-t border-primary/10">
        <p>
          &copy; {new Date().getFullYear()} {SITE.fullName}. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
