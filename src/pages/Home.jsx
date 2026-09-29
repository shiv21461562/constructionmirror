import HeroSection from "../components/HeroSection";
import AdStrip from "../components/AdStrip";
import LatestNews from "./news/LatestNews";
import National from "./news/national";
import FeaturedNews from "./news/FeaturedNews";
import GuestArticle from "./news/GuestArticle";
import CoverStory from "./news/CoverStory";
import InterviewSection from "./Interview/InterviewSection";
import ExclusiveInterviews from "./Interview/ExclusiveInterviews";

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

        {/* Future Sections */}
        {/*
      


         

        
     

      

       
          <AdStrip name="afterCoverStory" />

          <Magazines />
          <Clients />


        
        */}
      </main>
    </div>
  );
}

export default Home;
