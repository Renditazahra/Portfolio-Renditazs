function Education() {
  return (
    <section id="education">
      <h2 className="gradient-title" style={{ textAlign: "center" }}>
        My Education
      </h2>

      <div
        className="project-grid"
        style={{ marginTop: "48px" }}
      >
        {/* EDUCATION 1 */}
        <div className="card">
          <h3>Politeknik Negeri Media Kreatif Jakarta</h3>
          <p>
            <strong>Multimedia Engineering Technology</strong>
            <br />
            2021 – 2025
          </p>
        </div>

        {/* EDUCATION 2 */}
        <div className="card">
          <h3>SMK Sahid Jakarta</h3>
          <p>
            <strong>Multimedia</strong>
            <br />
            2019 – 2021
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
