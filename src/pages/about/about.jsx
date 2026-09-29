import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import FocusAreas from "../../components/about/FocusAreas";
import AboutCTA from "../../components/about/AboutCTA";

function About() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0A1128]">
      <main>
        <AboutHero />

        <OurStory />

        <FocusAreas />

        <AboutCTA />
      </main>
    </div>
  );
}

export default About;