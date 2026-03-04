import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("hero");
  const location = useLocation();

  useEffect(() => {
    // aktifkan observer hanya di homepage
    if (location.pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive((prev) =>
              prev === entry.target.id ? prev : entry.target.id
            );
          }
        });
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.25,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <nav className="floating-nav">
      <div className="floating-links">
        <a href="/#hero" className={active === "hero" ? "active" : ""}>
          Home
        </a>

        <a
          href="/#services"
          className={active === "services" ? "active" : ""}
        >
          Services
        </a>

        <a
          href="/#projects"
          className={active === "projects" ? "active" : ""}
        >
          Projects
        </a>

        <a
          href="/#contact"
          className={active === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
