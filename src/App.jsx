import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import CoverStory from "./components/home/CoverStory";

import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Magazines from "./pages/magazines/Magazines";
import NewsPage from "./pages/news/NewsPage";
import NewsDetail from "./pages/news/NewsDetail";
import Interview from "./pages/interview/Interview";
import ResourcesPage from "./pages/resources/ResourcesPage";
import Editorial from "./pages/editorial/Editorial";
import Events from "./pages/events/Events";
import GalleryPage from "./pages/gallery/GalleryPage";
import Advertise from "./pages/advertise/Advertise";
import Subscription from "./pages/subscription/Subscription";
import Contact from "./pages/contact/Contact";
import TermsConditions from "./pages/legal/TermsConditions";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";

function NotFound() {
  return <div className="py-32 text-center text-xl font-bold">404 - Page not found</div>;
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/magazines" element={<Magazines />} />

          {/* NEWS: static routes pehle, :slug last me */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/national" element={<NewsPage category="national" />} />
          <Route path="/news/international" element={<NewsPage category="international" />} />
          <Route path="/news/:slug" element={<NewsDetail />} />

          <Route path="/interview" element={<Interview />} />
          <Route path="/cover-story" element={<CoverStory />} />

          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/whitepapers" element={<ResourcesPage />} />
          <Route path="/resources/downloads" element={<ResourcesPage />} />

          <Route path="/editorial-calendar" element={<Editorial />} />
          <Route path="/event-calendar" element={<Events />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;