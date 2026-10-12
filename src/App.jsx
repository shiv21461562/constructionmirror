// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/common/Navbar";
// import Footer from "./components/common/Footer";
// import ScrollToTop from "./components/common/ScrollToTop";

// import Home from "./pages/home/Home";
// import About from "./pages/about/about";
// import Contact from "./pages/contact/Contact";
// import Magazines from "./pages/Magazines/Magazines";

// import NewsDetail from "./pages/news/NewsDetail";
// import National from "./components/home/national";
// import International from "./pages/news/international";

// import Interview from "./components/home/Interview";

// function App() {
//   return (
//     <div className="min-h-screen bg-white">

//       {/* ================= SCROLL TO TOP ================= */}
//       <ScrollToTop />

//       {/* ================= HEADER ================= */}
//       <Navbar />

//       {/* ================= PAGE CONTENT ================= */}
//       <main>
//         <Routes>

//           {/* ================= HOME ================= */}
//           <Route
//             path="/"
//             element={<Home />}
//           />

//           {/* ================= ABOUT ================= */}
//           <Route
//             path="/about"
//             element={<About />}
//           />

//           {/* ================= MAGAZINES ================= */}
//           <Route
//             path="/magazines"
//             element={<Magazines />}
//           />

//           {/* ================= NATIONAL NEWS ================= */}
//           <Route
//             path="/news/national"
//             element={<National />}
//           />

//           {/* ================= INTERNATIONAL NEWS ================= */}
//           <Route
//             path="/news/international"
//             element={<International />}
//           />

//           {/* ================= NEWS DETAIL ================= */}
//           <Route
//             path="/news/:slug"
//             element={<NewsDetail />}
//           />

//           {/* ================= INTERVIEW ================= */}
//           <Route
//             path="/interview"
//             element={<Interview />}
//           />

//           {/* ================= CONTACT ================= */}
//           <Route
//             path="/contact"
//             element={<Contact />}
//           />

//         </Routes>
//       </main>

//       {/* ================= FOOTER ================= */}
//       <Footer />

//     </div>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

// ================= PAGES =================

import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Contact from "./pages/contact/Contact";
import Magazines from "./pages/Magazines/Magazines";

import NewsDetail from "./pages/news/NewsDetail";
import National from "./components/home/national";
import International from "./pages/news/international";

import Interview from "./components/home/Interview";

// ================= MORE PAGES =================

import ResourcesPage from "./pages/resources/ResourcesPage";
import Editorial from "./pages/editorial/Editorial";
import Events from "./pages/events/Events";
import GalleryPage from "./pages/gallery/GalleryPage";

import Advertise from "./pages/advertise/Advertise";
import Subscription from "./pages/subscription/Subscription";



import TermsConditions from "./components/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";


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

          {/* ================= NEWS ================= */}

          {/* Main News */}
          <Route
            path="/news"
            element={<National />}
          />

          {/* National News */}
          <Route
            path="/news/national"
            element={<National />}
          />

          {/* International News */}
          <Route
            path="/news/international"
            element={<International />}
          />

          {/* News Detail */}
          <Route
            path="/news/:slug"
            element={<NewsDetail />}
          />

          {/* ================= INTERVIEW ================= */}
          <Route
            path="/interview"
            element={<Interview />}
          />

          {/* ================= RESOURCES ================= */}
          <Route
            path="/resources"
            element={<ResourcesPage />}
          />

          {/* Guest Article */}
          <Route
            path="/resources/whitepapers"
            element={<ResourcesPage />}
          />

          {/* Quotes */}
          <Route
            path="/resources/downloads"
            element={<ResourcesPage />}
          />

          {/* ================= MORE ================= */}

          {/* Editorial Calendar */}
          <Route
            path="/editorial-calendar"
            element={<Editorial />}
          />

          {/* Event Calendar */}
          <Route
            path="/event-calendar"
            element={<Events />}
          />

          {/* Gallery */}
          <Route
            path="/gallery"
            element={<GalleryPage />}
          />

          {/* ================= CONTACT ================= */}
          <Route
            path="/contact"
            element={<Contact />}
          />



          {/* ================= ADVERTISE ================= */}
<Route
  path="/advertise"
  element={<Advertise />}
/>

{/* ================= SUBSCRIPTION ================= */}
<Route
  path="/subscription"
  element={<Subscription />}
  
/>

<Route
  path="/terms"
  element={<TermsConditions />}
/>

<Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>

        </Routes>
      </main>

      {/* ================= FOOTER ================= */}


      <Footer />

    </div>
  );
}

export default App;