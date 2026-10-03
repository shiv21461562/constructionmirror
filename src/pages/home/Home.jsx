import HeroSection from "../../components/home/HeroSection";
import AdStrip from "../../components/home/AdStrip";

import LatestNews from "../../components/home/LatestNews";
import National from "../../components/home/national";
import FeaturedNews from "../../components/home/FeaturedNews";
import GuestArticle from "../../components/home/GuestArticle";
import CoverStory from "../../components/home/CoverStory";

import InterviewSection from "../../components/interview/InterviewSection";
import ExclusiveInterviews from "../../components/home/ExclusiveInterviews";


import MagazineSection from "../../components/magazines/MagazineSection";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Navigation */}

      {/* Main Website Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Header Advertisement */}
        <AdStrip name="header" />

        {/* Latest News */}
        <LatestNews />

        {/* National News */}
        <National />
        <AdStrip name="afterNational" />
        <FeaturedNews />

        <InterviewSection />
        <AdStrip name="afterExclusive" />
        <ExclusiveInterviews />
        <AdStrip name="afterExclusive" />
        <GuestArticle />
        <CoverStory />
        <AdStrip name="afterCoverStory" />
        <MagazineSection />

        {/* Future Sections */}
        {/*


          <Magazines />
          <Clients />

 
        */}
      </main>
    </div>
  );
}

export default Home;
