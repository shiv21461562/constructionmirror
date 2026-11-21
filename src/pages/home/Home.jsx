import HeroSection from "../../components/home/HeroSection";
import AdStrip from "../../components/home/AdStrip";

import LatestNews from "../../components/home/LatestNews";
import National from "../../components/news/NationalNews";
import FeaturedNews from "../../components/home/FeaturedNews";
import GuestArticle from "../../components/home/GuestArticle";
import CoverStory from "../../components/home/CoverStory";

import InterviewSection from "../../components/interview/InterviewSection";
import ExclusiveInterviews from "../../components/home/ExclusiveInterviews";

import ClientsSection from "../../components/home/ClientsSection";

import MagazineSection from "../../components/home/MagazineSection";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Website Content */}
      <main>
        {/* Hero Section (andar wali strip: header, Slot 1-2) */}
        <HeroSection />

        {/* Hero ke neeche (Slot 3-4) */}
        <AdStrip name="afterHero" />

        {/* Latest News */}
        <LatestNews />

        {/* National News */}
        <National />
        {/* National ke neeche (Slot 5-6) */}
        <AdStrip name="afterNational" />

        <FeaturedNews />

        <InterviewSection />
        {/* Interviews ke neeche (Slot 7-8) */}
        <AdStrip name="afterInterviews" />

        <ExclusiveInterviews />
        {/* Exclusive Interviews ke neeche (Slot 9-10) */}
        <AdStrip name="afterExclusive" />

        <GuestArticle />
        <CoverStory />
        {/* Cover Story ke neeche (Slot 11-12) */}
        <AdStrip name="afterCoverStory" />

        <MagazineSection />

        <ClientsSection />
      </main>
    </div>
  );
}

export default Home;