
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
import GuestArticlePage from "./pages/resources/GuestArticlePage";
import QuotesPage from "./pages/resources/QuotesPage";

import Editorial from "./pages/editorial/Editorial";
import Events from "./pages/events/Events";
import GalleryPage from "./pages/gallery/GalleryPage";
import Advertise from "./pages/advertise/Advertise";
import Subscription from "./pages/subscription/Subscription";
import Contact from "./pages/contact/Contact";

import TermsConditions from "./pages/legal/TermsConditions";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";

import BackToTop from "./components/common/BackToTop";
import WhatsAppButton from "./components/common/WhatsAppButton";

function NotFound() {
  return (
    <div className="py-32 text-center text-xl font-bold">
      404 - Page not found
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* MAGAZINES */}
          <Route path="/magazines" element={<Magazines />} />

          {/* NEWS */}
          <Route path="/news" element={<NewsPage />} />

          <Route
            path="/news/national"
            element={<NewsPage category="national" />}
          />

          <Route
            path="/news/international"
            element={<NewsPage category="international" />}
          />

          <Route path="/news/:slug" element={<NewsDetail />} />

          {/* INTERVIEWS */}
          <Route path="/interview" element={<Interview />} />

          {/* COVER STORY */}
          <Route path="/cover-story" element={<CoverStory />} />

          {/* RESOURCES */}
          <Route path="/resources" element={<ResourcesPage />} />

          <Route
            path="/resources/guest-article"
            element={<GuestArticlePage />}
          />

          <Route
            path="/resources/quotes"
            element={<QuotesPage />}
          />

          {/* EDITORIAL CALENDAR */}
          <Route path="/editorial-calendar" element={<Editorial />} />

          {/* EVENT CALENDAR */}
          <Route path="/event-calendar" element={<Events />} />

          {/* GALLERY */}
          <Route path="/gallery" element={<GalleryPage />} />

          {/* ADVERTISE */}
          <Route path="/advertise" element={<Advertise />} />

          {/* SUBSCRIPTION */}
          <Route path="/subscription" element={<Subscription />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* LEGAL */}
          <Route path="/terms" element={<TermsConditions />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <BackToTop />

      <WhatsAppButton />
    </div>
  );
}

export default App;
