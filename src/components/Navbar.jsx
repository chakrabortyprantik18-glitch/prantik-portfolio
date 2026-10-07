import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const handleNavigation = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-glow"></div>

        <div className="navbar-inner">

          {/* LOGO */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={() => handleNavigation("home")}
          >
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Prantik</span>
            <span className="logo-cursor">_</span>
            <span className="logo-bracket">&gt;</span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="navbar-links">
            {navigation.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  activeSection === item.id ? "active" : ""
                }
                onClick={() => handleNavigation(item.id)}
              >
                <span className="nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* DESKTOP TALK BUTTON */}
          <div className="navbar-actions">
            <a
              href="#contact"
              className="talk-button"
              onClick={() => handleNavigation("contact")}
            >
              <span>Let's Talk</span>
              <strong>↗</strong>
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className={`mobile-menu-button ${
                menuOpen ? "is-open" : ""
              }`}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "is-open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-background"></div>

        <div className="mobile-menu-inner">

          <div className="mobile-menu-top">
            <span>MENU</span>

            <span className="mobile-menu-status">
              PRANTIK.DEV
            </span>
          </div>

          <nav className="mobile-menu-links">
            {navigation.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  activeSection === item.id ? "active" : ""
                }
                onClick={() => handleNavigation(item.id)}
              >
                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="mobile-nav-label">
                  {item.label}
                </span>

                <span className="mobile-nav-arrow">
                  ↗
                </span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="mobile-menu-talk"
            onClick={() => handleNavigation("contact")}
          >
            <span>Let's Talk</span>
            <strong>↗</strong>
          </a>

          <div className="mobile-menu-footer">
            <span>WEB DEVELOPER</span>
            <span>CREATIVE PROBLEM SOLVER</span>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;