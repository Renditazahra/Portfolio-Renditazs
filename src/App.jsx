import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/contact";

// DETAIL PAGE
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // ganti ke "auto" kalau mau tanpa animasi
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Project />
              <Contact />
            </>
          }
        />

        {/* ================= PROJECT DETAIL ================= */}
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;