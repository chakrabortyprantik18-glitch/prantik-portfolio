import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "journey", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.35;
      let current = "home";

      navigation.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (
          rect.top <= triggerPoint &&
          rect.bottom >= triggerPoint
        ) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-glow"></div>

      <div className="navbar-inner">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => setActiveSection("home")}
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Prantik</span>
          <span className="logo-cursor">_</span>
          <span className="logo-bracket">&gt;</span>
        </a>

        {/* NAVIGATION */}
        <nav className="navbar-links">
          {navigation.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id ? "active" : ""
              }
              onClick={() => setActiveSection(item.id)}
            >
              <span className="nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* TALK BUTTON */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="talk-button"
            onClick={() => setActiveSection("contact")}
          >
            <span>Let's Talk</span>
            <strong>↗</strong>
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;