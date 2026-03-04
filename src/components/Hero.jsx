import gweh from "../assets/images/gweh.png";

function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "64px",
        padding: "140px 6vw 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ================= LEFT CONTENT ================= */}
      <div style={{ maxWidth: "620px", zIndex: 2 }}>
        <span
          style={{
            color: "#9ca3af",
            fontSize: "14px",
            letterSpacing: "0.6px",
            textTransform: "uppercase",
          }}
        >
          Graphic Designer & Multimedia Creative
        </span>

        <h1
          style={{
            marginTop: "12px",
            fontSize: "clamp(44px, 6vw, 76px)",
            fontWeight: "800",
            lineHeight: "1.05",
          }}
        >
          Hello, I’m{" "}
          <span className="hero-accent">Rendita Zahra Syahranie</span>
        </h1>

        <p
          style={{
            marginTop: "24px",
            fontSize: "16px",
            color: "#d1d5db",
            lineHeight: "1.8",
            maxWidth: "520px",
          }}
        >
          A visual designer with a background in multimedia engineering, focused
          on crafting clear, consistent, and impactful visual communication
          across digital platforms.
        </p>

        {/* ================= CTA ================= */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "36px",
            flexWrap: "wrap",
          }}
        >
          <a href="#projects">
            <button className="glass-btn">
              View Selected Works
            </button>
          </a>

          {/* DOWNLOAD RESUME BUTTON */}
          <a
            href="/CV-Rendita-Zahra.pdf"
            download
          >
            <button className="glass-btn">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div
        style={{
          position: "relative",
          width: "420px",
          maxWidth: "90vw",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-20%",
            background:
              "radial-gradient(circle at 60% 40%, rgba(236,72,153,0.45), transparent 60%)",
            filter: "blur(120px)",
            zIndex: 0,
          }}
        />

        <img
          src={me}
          alt="Rendita Zahra Syahranie"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            position: "relative",
            zIndex: 1,
            filter: `
              drop-shadow(0 18px 30px rgba(0,0,0,0.45))
              drop-shadow(-10px 0 25px rgba(236,72,153,0.25))
            `,
          }}
        />
      </div>
    </section>
  );
}

export default Hero;