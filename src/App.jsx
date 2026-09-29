import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/about/about";
import Contact from "./pages/Contact";
import Magazines from "./pages/Magazines";

import NewsDetail from "./pages/news/NewsDetail";
import National from "./pages/news/national";
import International from "./pages/news/international";

import Interview from "./pages/Interview";

function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= SCROLL TO TOP ================= */}
      <ScrollToTop />

      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= PAGE CONTENT ================= */}
      <main>
        <Routes>

          {/* ================= HOME ================= */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ================= ABOUT ================= */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* ================= MAGAZINES ================= */}
          <Route
            path="/magazines"
            element={<Magazines />}
          />

          {/* ================= NATIONAL NEWS ================= */}
          <Route
            path="/news/national"
            element={<National />}
          />

          {/* ================= INTERNATIONAL NEWS ================= */}
          <Route
            path="/news/international"
            element={<International />}
          />

          {/* ================= NEWS DETAIL ================= */}
          <Route
            path="/news/:slug"
            element={<NewsDetail />}
          />

          {/* ================= INTERVIEW ================= */}
          <Route
            path="/interview"
            element={<Interview />}
          />

          {/* ================= CONTACT ================= */}
          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}

export default App;