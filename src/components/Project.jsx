/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import kemnaker from "/assets/experience/KEMNAKER.png";
import ut from "/assets/experience/UNITED-TRACTORS.jpg";
import kementan from "/assets/experience/KEMENTAN.png";
import erlangga from "/assets/experience/ERLANGGA.png";

function Project() {
  return (
    <section id="projects" style={{ padding: "120px 6vw" }}>
      <h2
        className="gradient-title"
        style={{
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        Selected Experience & Projects
      </h2>

      <p
        style={{
          textAlign: "center",
          opacity: 0.7,
          maxWidth: "600px",
          margin: "0 auto 72px",
          fontSize: "15px",
        }}
      >
        Selected works in branding, visual communication, and multimedia design.
      </p>

      {/* ================= FEATURED PROJECT ================= */}
      <div
        className="featured-card"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "48px",
          alignItems: "center",
          marginBottom: "80px",
          padding: "40px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <img
          src="/assets/experience/KEMNAKER.png"
          alt="Kementerian Ketenagakerjaan RI"
          style={{
            width: "100%",
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />

        <div>
          <span
            style={{
              fontSize: "13px",
              padding: "6px 14px",
              borderRadius: "50px",
              background: "rgba(255,255,255,0.08)",
              display: "inline-block",
              marginBottom: "18px",
            }}
          >
            Graphic Designer · Current Role
          </span>

          <h3 style={{ fontSize: "28px", marginBottom: "16px" }}>
            Kementerian Ketenagakerjaan RI
          </h3>

          <p style={{ opacity: 0.8, lineHeight: "1.7" }}>
            Designing and managing visual content for the national MagangHub
            program, including social media assets, digital publications, and
            event visuals supporting large-scale apprenticeship initiatives.
          </p>

          <Link to="/projects/kemnaker">
            <button style={{ marginTop: "24px" }}>
              View Case Study →
            </button>
          </Link>
        </div>
      </div>

      {/* ================= SECONDARY GRID ================= */}
      <div
        className="project-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
        }}
      >
        {/* UNITED TRACTORS */}
        <div className="card">
          <img src="/assets/experience/UNITED-TRACTORS.jpg" alt="United Tractors Tbk" />

          <div style={{ padding: "20px" }}>
            <span style={{ fontSize: "13px", opacity: 0.6 }}>
              Communications & Graphic Design Intern
            </span>

            <h3 style={{ margin: "12px 0" }}>
              PT United Tractors, Tbk
            </h3>

            <p style={{ opacity: 0.8, fontSize: "14px", lineHeight: "1.6" }}>
              Produced visual assets and digital content supporting corporate
              branding and innovation initiatives.
            </p>

            <Link to="/projects/united-tractors">
              <button style={{ marginTop: "18px" }}>
                View →
              </button>
            </Link>
          </div>
        </div>

        {/* KEMENTAN */}
        <div className="card">
          <img src="/assets/experience/KEMENTAN.png" alt="Kementerian Pertanian RI" />

          <div style={{ padding: "20px" }}>
            <span style={{ fontSize: "13px", opacity: 0.6 }}>
              Graphic Design Intern – Media Perkebunan
            </span>

            <h3 style={{ margin: "12px 0" }}>
              Kementerian Pertanian RI
            </h3>

            <p style={{ opacity: 0.8, fontSize: "14px", lineHeight: "1.6" }}>
              Designed editorial layouts and social media visuals for
              ministerial publications and events.
            </p>

            <Link to="/projects/kementerian-pertanian">
              <button style={{ marginTop: "18px" }}>
                View →
              </button>
            </Link>
          </div>
        </div>

        {/* ERLANGGA */}
        <div className="card">
          <img src="/assets/experience/ERLANGGA.png" alt="PT Erlangga Publisher" />

          <div style={{ padding: "20px" }}>
            <span style={{ fontSize: "13px", opacity: 0.6 }}>
              Photographer – Freelance
            </span>

            <h3 style={{ margin: "12px 0" }}>
              PT Erlangga Publisher
            </h3>

            <p style={{ opacity: 0.8, fontSize: "14px", lineHeight: "1.6" }}>
              Captured and curated visual assets for sports-related events,
              supporting both print and digital publications.
            </p>

            <Link to="/projects/erlangga">
              <button style={{ marginTop: "18px" }}>
                View →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
