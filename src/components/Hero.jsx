import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (event) => {
    const area = event.currentTarget;
    const rect = area.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (mouseX - centerX) / centerX;
    const percentY = (mouseY - centerY) / centerY;

    setRotation({
      x: percentY * -10,
      y: percentX * 12,
    });
  };

  const handlePointerLeave = () => {
    setRotation({
      x: 0,
      y: 0,
    });
  };

  return (
    <section id="home" className="hero-section">

      {/* =========================================
          FLOATING RETRO SYMBOLS
      ========================================= */}

      <div className="floating-symbol symbol-1">+</div>
      <div className="floating-symbol symbol-2">?</div>
      <div className="floating-symbol symbol-3">&lt;/&gt;</div>
      <div className="floating-symbol symbol-4">@</div>
      <div className="floating-symbol symbol-5">*</div>
      <div className="floating-symbol symbol-6">#</div>
      <div className="floating-symbol symbol-7">{"{}"}</div>
      <div className="floating-symbol symbol-8">+</div>
      <div className="floating-symbol symbol-9">&lt;&gt;</div>
      <div className="floating-symbol symbol-10">//</div>
      <div className="floating-symbol symbol-11">$</div>
      <div className="floating-symbol symbol-12">?</div>


      {/* =========================================
          LEFT SIDE
      ========================================= */}

      <div className="hero-content">

        <p className="hero-eyebrow">
          HEY, I'M
        </p>

        <h1>
          PRANTIK
          <br />

          <span className="hero-name-blue">
            CHAKRABORTY
          </span>
        </h1>

        <p className="hero-role">
          WEB DEVELOPER
          <span>|</span>
          CREATIVE PROBLEM SOLVER
        </p>

        <p className="hero-description">
          I build modern websites, web applications and
          creative digital experiences that turn ideas
          into reality.
        </p>

        <div className="hero-buttons">

          <a
            href="#contact"
            className="hero-primary-button"
          >
            Let's Work Together →
          </a>

          <a
            href="#skills"
            className="hero-secondary-button"
          >
            Explore My Skills
          </a>

        </div>

        <div className="hero-tags">

          <span className="tag-pink">
            &lt;/&gt; CODE
          </span>

          <span className="tag-blue">
            WEB
          </span>

          <span className="tag-yellow">
            CREATIVE
          </span>

        </div>

      </div>


      {/* =========================================
          3D AREA
      ========================================= */}

      <div
        className="hero-3d"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >

        <div className="hero-glow"></div>

        <div className="floating-badge badge-react">
          ⚛
          <span>React</span>
        </div>

        <div className="floating-badge badge-js">
          JS
          <span>JavaScript</span>
        </div>

        <div className="floating-badge badge-node">
          ◈
          <span>Node.js</span>
        </div>

        <div
          className="developer-card"
          style={{
            transform: `
              perspective(1200px)
              rotateX(${rotation.x}deg)
              rotateY(${rotation.y}deg)
              scale3d(1.02, 1.02, 1.02)
            `,
          }}
        >

          <div className="developer-card-inner">

            <img
              src="/developer-avatar.png"
              alt="Prantik - Web Developer"
              className="developer-image"
            />

            <div className="card-shine"></div>

          </div>

        </div>

        <div className="developer-label">
          <span>&lt;/&gt;</span>
          WEB
          <br />
          DEVELOPER
        </div>

      </div>

    </section>
  );
}

export default Hero;