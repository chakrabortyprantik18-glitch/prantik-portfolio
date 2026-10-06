import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const contacts = [
    {
      icon: faWhatsapp,
      label: "WHATSAPP",
      title: "Let's Chat",
      link: "https://wa.link/gzyeqb",
      className: "contact-whatsapp",
    },
    {
      icon: faInstagram,
      label: "INSTAGRAM",
      title: "@devwithprantik",
      link: "https://www.instagram.com/devwithprantik/",
      className: "contact-instagram",
    },
    {
      icon: faPhone,
      label: "DIRECT CALL",
      title: "9365716039",
      link: "tel:+919365716039",
      className: "contact-call",
    },
  ];

  return (
    <section id="contact" className="contact-section">

      <div className="contact-grid"></div>

      <div className="contact-symbol contact-symbol-1">+</div>

      <div className="contact-symbol contact-symbol-2">
        {"{}"}
      </div>

      <div className="contact-symbol contact-symbol-3">
        {"</>"}
      </div>

      <div className="contact-symbol contact-symbol-4">
        @
      </div>

      <div className="contact-symbol contact-symbol-5">
        ?
      </div>

      <div className="contact-container">

        {/* HEADER */}

        <div className="contact-header">

          <div className="contact-header-left">

            <span className="contact-label">
              GOT AN IDEA?
            </span>

            <h2>
              LET'S BUILD
              <br />
              <span>SOMETHING.</span>
            </h2>

          </div>

          <div className="contact-header-right">

            <p>
              Have a project in mind, a business idea,
              or something you want to bring to life?
              Let's talk.
            </p>

            <span className="contact-code">
              /03 — CONTACT
            </span>

          </div>

        </div>


        {/* AVAILABILITY */}

        <div className="contact-availability">

          <span className="availability-dot"></span>

          <span>
            AVAILABLE FOR NEW PROJECTS
          </span>

          <span className="availability-line"></span>

          <span className="availability-year">
            2026 →
          </span>

        </div>


        {/* CONTACT OPTIONS */}

        <div className="contact-options">

          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target={
                contact.link.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                contact.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`contact-option ${contact.className}`}
            >

              <div className="contact-option-icon">
                <FontAwesomeIcon icon={contact.icon} />
              </div>

              <div className="contact-option-info">

                <span>
                  {contact.label}
                </span>

                <strong>
                  {contact.title}
                </strong>

              </div>

              <div className="contact-option-arrow">
                ↗
              </div>

            </a>
          ))}

        </div>


        {/* BIG CTA */}

        <div className="contact-cta">

          <div className="cta-decoration cta-decoration-1">
            {"</>"}
          </div>

          <div className="cta-decoration cta-decoration-2">
            +
          </div>

          <span className="cta-small">
            SOMETHING IN MIND?
          </span>

          <h3>
            HAVE AN IDEA?
            <br />

            <span className="cta-lets">
              LET'S
            </span>{" "}

            <span className="cta-make">
              MAKE
            </span>{" "}

            <span className="cta-it">
              IT
            </span>{" "}

            <span className="cta-live">
              LIVE.
            </span>
          </h3>

          <p>
            Your idea doesn't have to stay an idea.
            Let's turn it into something people can
            actually see, use and remember.
          </p>

          <a
            href="https://wa.link/gzyeqb"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            START A CONVERSATION
            <span>→</span>
          </a>

        </div>


        {/* DOMAIN */}

        <div className="contact-domain">

          <span>
            BUILT WITH CODE
          </span>

          <strong>
            prantik.online
          </strong>

          <span>
            © 2026
          </span>

        </div>


        {/* FOOTER */}

        <footer className="contact-footer">

          <span>
            DESIGNED & BUILT BY PRANTIK
          </span>

          <a href="#home">
            BACK TO TOP ↑
          </a>

        </footer>

      </div>

    </section>
  );
}

export default Contact;