import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import PainPoints from "@/components/PainPoints";
import ValueProps from "@/components/ValueProps";
import CourseContent from "@/components/CourseContent";
import Bonuses from "@/components/Bonuses";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Header />
      <SocialProof />
      <main className="tech-grid min-h-screen pt-20 scroll-smooth">
        <Hero />
        <PainPoints />
        <ValueProps />
        <Countdown />
        <CourseContent />
        <Speakers />
        <Schedule />
        <Bonuses />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
