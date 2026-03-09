import { useParams, Link } from "react-router-dom";

/* ================= UNITED TRACTORS ================= */
// import intalks from "/assets/projects/United-Tractors/flayer-program.png";
// import utvi from "/assets/projects/United-Tractors/UTVI-logo.png";
// import mascot from "/assets/projects/United-Tractors/illustration.png";
// import igFeed from "/assets/projects/United-Tractors/utvi-instagram-feed.png";
// import merch from "/assets/projects/United-Tractors/utvi-merchandise.png";

/* ================= KEMENTAN ================= */
// import majalah from "/assets/projects/kementerian-pertanian/layout-majalah.png";

/* ================= KEMNAKER ================= */
// import hariBesar from "/assets/projects/kemnaker/hari-besar.png";
// import informasiUangSaku from "/assets/projects/kemnaker/informasi.png";
// import jadwalMentor from "/assets/projects/kemnaker/Countdown.png";
// import softSkillPoster from "/assets/projects/kemnaker/softskill-poster.png";
// import softSkillThumbnail from "/assets/projects/kemnaker/softskill-thumbnail.png";
// import softSkillVirtualBg from "/assets/projects/kemnaker/softskill-virtual-bg.png";
// import infografisPoster from "/assets/projects/kemnaker/Infografis.png";

const projectData = {
  "united-tractors": {
    company: "PT United Tractors, Tbk",
    role: "Graphic Design Intern – Innovation Department (UTVI)",
    intro: `
During my internship at United Tractors, I worked on various visual design
projects supporting innovation programs, internal events, and corporate branding.
    `,
    projects: [
      {
        title: "INTALKS – Inspiring Talks",
        image: "./public/assets/Projects/United-Tractors/utvi-merchandise.png",
        description:
          "Designed the main visual identity for INTALKS, including event banners and promotional materials.",
      },
      {
        title: "UTVI Visual Identity",
        image: "C:\PORTOFOLIO\portofolio\public\assets\Projects\United-Tractors\UTVI-logo.png",
        description:
          "Developed visual identity assets supporting innovation communication initiatives.",
      },
      {
        title: "UTVI Instagram Feed Design",
        image: "./public/assets/Projects/United-Tractors/utvi-instagram-feed.png",
        description:
          "Designed structured and visually engaging Instagram feed content.",
      },
      {
        title: "Mascot & Illustration Design",
        image: "C:\PORTOFOLIO\portofolio\public\assets\Projects\United-Tractors\illustration.png",
        description:
          "Developed mascot characters and supporting illustrations.",
      },
      {
        title: "Event Merchandise Design",
        image: "./public/assets/Projects/United-Tractors/utvi-merchandise.png",
        description:
          "Created branded merchandise for corporate innovation events.",
      },
    ],
  },

  "kementerian-pertanian": {
    company: "Kementerian Pertanian RI",
    role: "Graphic Designer – Media Perkebunan",
    intro: `
Designed editorial layouts and structured publications for official
ministerial media.
    `,
    projects: [
      {
        title: "Media Perkebunan Magazine Layout",
        image: "C:\PORTOFOLIO\portofolio\public\assets\Projects\kementerian-pertanian\layout-majalah.png",
        description:
          "Designed cover and inner page layouts using strong typographic hierarchy.",
      },
    ],
  },

  "kemnaker": {
    company: "Kementerian Ketenagakerjaan RI",
    role: "Graphic Designer – MagangHub Batch 2",
    intro: `
Contributed to digital communication materials for the national
MagangHub apprenticeship program.
    `,
    projects: [
      {
        title: "Commemorative Visual Campaigns",
        image: "C:\PORTOFOLIO\portofolio\public\assets\Projects\Kemnaker\hari-besar.png",
        description:
          "Designed official social media visuals aligned with institutional branding.",
      },
      {
        title: "Allowance Information Campaign",
        image: "C:\PORTOFOLIO\portofolio\public\assets\Projects\Kemnaker\Informasi.png",
        description:
          "Created structured informational visuals explaining program details.",
      },
      {
        title: "Mentor Timeline System",
        image: "C:\PORTOFOLIO\portofolio\public\assets\Projects\Kemnaker\Countdown.png",
        description:
          "Developed structured monthly reporting visuals.",
      },
      {
        title: "Soft Skill Programme Poster",
        image: "C:\PORTOFOLIO\portofolio\public\assets\Projects\Kemnaker\softskill-poster.png",
        description:
          "Designed official event poster emphasizing agenda clarity.",
      },
      {
        title: "YouTube Thumbnail Design",
        image: "C:\PORTOFOLIO\portofolio\public\assets\Projects\Kemnaker\softskill-thumbnail.png",
        description:
          "Created high-impact thumbnails optimized for mobile viewing.",
      },
      {
        title: "Virtual Background Design",
        image: "C:\PORTOFOLIO\portofolio\public\assets\Projects\Kemnaker\softskill-virtual-bg.png",
        description:
          "Designed professional branded virtual backgrounds.",
      },
      {
        title: "Infographic Poster Series",
        image: "C:\PORTOFOLIO\portofolio\public\assets\Projects\Kemnaker\Infografis.png",
        description:
          "Created structured infographic posters simplifying policy and program information.",
      },
    ],
  },

  "erlangga": {
    company: "PT Penerbit Erlangga",
    role: "Photographer – Event Documentation",
    intro: `
Supported visual documentation during Erlass Sports event,
focusing on capturing key activities and managing structured
photo archiving.
    `,
    projects: [
      {
        title: "Erlass Sports – Event Documentation",
        image: null,
        description:
          "Captured on-site event activities and curated selected photos into a structured archive system to support internal documentation and promotional needs.",
      },
    ],
  },
};

function ProjectDetail() {
  const { slug } = useParams();
  const data = projectData[slug];

  if (!data) {
    return <p style={{ padding: "120px" }}>Project not found.</p>;
  }

  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "140px 24px 120px",
      }}
    >
      <Link to="/" style={{ opacity: 0.6 }}>
        ← Back to Home
      </Link>

      <div
        style={{
          marginTop: "70px",
          maxWidth: "820px",
          margin: "70px auto 0",
          textAlign: "center",
        }}
      >
        <h1 className="gradient-title" style={{ fontSize: "40px" }}>
          {data.company}
        </h1>

        <p style={{ marginTop: "14px", opacity: 0.75 }}>
          {data.role}
        </p>

        <p style={{ marginTop: "32px", lineHeight: "1.9" }}>
          {data.intro}
        </p>
      </div>

      <div style={{ marginTop: "110px" }}>
        {data.projects.map((project, index) => (
          <div key={index} style={{ marginBottom: "140px" }}>

            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  borderRadius: "28px",
                  boxShadow: "0 40px 90px rgba(0,0,0,0.55)",
                }}
              />
            ) : (
              <div
                style={{
                  height: "380px",
                  borderRadius: "28px",
                  background:
                    "radial-gradient(circle at 30% 30%, #3b82f6, #1e1e2f)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "22px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                }}
              >
                Event Documentation & Asset Management
              </div>
            )}

            <div
              style={{
                marginTop: "36px",
                maxWidth: "760px",
                margin: "36px auto 0",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontSize: "30px", fontWeight: "700" }}>
                {project.title}
              </h2>

              <p
                style={{
                  marginTop: "18px",
                  lineHeight: "1.9",
                  color: "#cfd0ff",
                }}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectDetail;