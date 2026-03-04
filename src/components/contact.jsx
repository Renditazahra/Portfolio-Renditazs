function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "140px 6vw 160px",
        textAlign: "center",
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: "800",
        }}
      >
        Let’s Work Together
      </h2>

      {/* DESC */}
      <p
        style={{
          marginTop: "20px",
          maxWidth: "640px",
          marginInline: "auto",
          lineHeight: "1.8",
          color: "#d1d5db",
        }}
      >
        Open to professional opportunities, creative collaborations, and
        project-based work. Feel free to reach out for discussions or further
        inquiries.
      </p>

      {/* CONTACT CARD */}
      <div
        className="card"
        style={{
          maxWidth: "760px",
          margin: "64px auto 0",
          padding: "44px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            color: "#9ca3af",
            maxWidth: "520px",
            lineHeight: "1.7",
          }}
        >
          Whether you have a project in mind or are looking for a visual designer
          to join your team, I’m always open to meaningful conversations.
        </p>

        {/* CTA BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="mailto:renditazahrasyahranie@gmail.com">
            <button className="glass-btn">Email Me</button>
          </a>

          <a
            href="https://www.linkedin.com/in/rendita-zahra-syahranie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="glass-btn">Connect on LinkedIn</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
