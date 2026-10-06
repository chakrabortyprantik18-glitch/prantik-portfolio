import { useState } from "react";
import "./Services.css";

function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      number: "01",
      title: "Web Development",
      short:
        "Modern, responsive websites built around your brand, goals and audience.",
      description:
        "I build responsive websites from the ground up, focusing on clean interfaces, performance, accessibility and a strong visual identity.",
      technologies: "HTML5 • CSS3 • JavaScript • React • Vite",
    },

    {
      number: "02",
      title: "Web Applications",
      short:
        "Interactive web applications designed to solve real business problems.",
      description:
        "I create interactive web applications with reusable components, dynamic interfaces, user flows and backend integration.",
      technologies: "React • JavaScript • Node.js • APIs",
    },

    {
      number: "03",
      title: "E-Commerce",
      short:
        "Online stores designed to make browsing, buying and managing products simple.",
      description:
        "I can build e-commerce experiences with product catalogs, responsive shopping interfaces, payment integration and backend management.",
      technologies: "React • Node.js • MySQL • APIs • Payments",
    },

    {
      number: "04",
      title: "Backend & APIs",
      short:
        "Reliable backend systems that power websites and applications.",
      description:
        "I develop server-side systems, REST APIs, authentication, database connections, file handling and application logic.",
      technologies: "Node.js • Express.js • MySQL • SQL",
    },

    {
      number: "05",
      title: "UI / UX & Interaction",
      short:
        "Interfaces that look polished, feel intuitive and communicate clearly.",
      description:
        "I design and develop interfaces with thoughtful layouts, responsive behavior, micro-interactions and purposeful animations.",
      technologies: "React • CSS3 • JavaScript • Motion",
    },

    {
      number: "06",
      title: "Deployment & Maintenance",
      short:
        "Taking your project from development to a reliable live website.",
      description:
        "I handle production builds, hosting configuration, deployment, updates, performance improvements and ongoing technical maintenance.",
      technologies: "Git • GitHub • Vite • Node.js • Hosting",
    },
  ];

  return (
    <section id="services" className="services-section">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="services-grid-bg"></div>

      <div className="services-decoration services-decoration-1">
        +
      </div>

      <div className="services-decoration services-decoration-2">
        {"{}"}
      </div>


      {/* =========================================
          HEADER
      ========================================= */}

      <div className="services-header">

        <div className="services-header-left">

          <span className="services-label">
            WHAT I DO
          </span>

          <h2>
            SERVICES
          </h2>

        </div>

        <div className="services-header-right">

          <p>
            From idea to deployment, I build digital
            products that are functional, scalable
            and designed with purpose.
          </p>

          <span className="services-header-code">
            /01 — SERVICES
          </span>

        </div>

      </div>


      {/* =========================================
          SERVICES LIST
      ========================================= */}

      <div className="services-list">

        {services.map((service) => (

          <article
            key={service.number}
            className="service-item"
            onClick={() => setActiveService(service)}
          >

            <div className="service-number">
              {service.number}
            </div>


            <div className="service-main">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.short}
              </p>

            </div>


            <div className="service-tech">
              {service.technologies}
            </div>


            <button
              type="button"
              className="service-arrow"
              onClick={(event) => {
                event.stopPropagation();
                setActiveService(service);
              }}
              aria-label={`View ${service.title}`}
            >
              ↗
            </button>

          </article>

        ))}

      </div>


      {/* =========================================
          BOTTOM STATEMENT
      ========================================= */}

      <div className="services-bottom">

        <div className="services-bottom-line"></div>

        <div className="services-bottom-content">

          <span>
            HAVE AN IDEA?
          </span>

          <strong>
            LET'S BUILD IT.
          </strong>

          <a href="#contact">
            START A PROJECT →
          </a>

        </div>

      </div>


      {/* =========================================
          SERVICE DETAIL MODAL
      ========================================= */}

      {activeService && (

        <div
          className="service-modal-overlay"
          onClick={() => setActiveService(null)}
        >

          <div
            className="service-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="service-modal-top">

              <span className="service-modal-number">
                {activeService.number}
              </span>

              <button
                type="button"
                className="service-modal-close"
                onClick={() => setActiveService(null)}
                aria-label="Close service"
              >
                ×
              </button>

            </div>


            <span className="service-modal-label">
              SERVICE
            </span>

            <h3>
              {activeService.title}
            </h3>


            <p className="service-modal-description">
              {activeService.description}
            </p>


            <div className="service-modal-tech">

              <span>
                TECHNOLOGIES
              </span>

              <strong>
                {activeService.technologies}
              </strong>

            </div>


            <a
              href="#contact"
              className="service-modal-button"
              onClick={() => setActiveService(null)}
            >
              DISCUSS A PROJECT →
            </a>

          </div>

        </div>

      )}

    </section>
  );
}

export default Services;