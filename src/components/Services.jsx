function Services() {
  return (
    <section id="services">
      <h2 className="gradient-title" style={{ textAlign: "center" }}>
  My Quality Services
</h2>

      <div
        className="project-grid"
        style={{ marginTop: "48px" }}
      >
        {/* SERVICE 01 */}
        <div className="card">
          <h3>Graphic Design & Visual Communication</h3>
          <p>
            Creating impactful visual assets for social media, events, editorial
            layouts, and corporate branding. Experienced in delivering clean,
            professional visuals using Adobe Creative Suite while maintaining
            strong visual hierarchy and brand consistency.
          </p>
        </div>

        {/* SERVICE 02 */}
        <div className="card">
          <h3>UI / UX Design</h3>
          <p>
            Designing user-centered interfaces, wireframes, and interactive
            prototypes using Figma. Focused on usability, clarity, and
            meaningful digital experiences for web and mobile platforms.
          </p>
        </div>

        {/* SERVICE 03 */}
        <div className="card">
          <h3>Social Media Content & Branding</h3>
          <p>
            Planning and designing consistent, engaging content for Instagram
            and LinkedIn. Experienced in managing visual identity, content
            layout, and branding strategy to support audience engagement and
            communication goals.
          </p>
        </div>

        {/* SERVICE 04 */}
        <div className="card">
          <h3>Editorial & Layout Design</h3>
          <p>
            Designing magazine layouts, publications, and structured visual
            storytelling for both print and digital media. Focused on clarity,
            readability, and strong composition to enhance information delivery.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
