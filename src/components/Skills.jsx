import { useState } from "react";
import "./Skills.css";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      name: "HTML5",
      category: "FRONTEND",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      className: "html",
      where: "I use it to structure websites, pages, forms and web interfaces.",
      why: "It's the foundation of every web page.",
      role: "Structure & Markup",
    },

    {
      name: "CSS3",
      category: "FRONTEND",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      className: "css",
      where: "I use it for layouts, responsive design, animations and visual styling.",
      why: "It controls how the website looks and behaves visually.",
      role: "Design & Styling",
    },

    {
      name: "JavaScript",
      category: "LANGUAGE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      className: "javascript",
      where: "I use it for interactive websites, logic, APIs and browser functionality.",
      why: "It's a core programming language for modern web development.",
      role: "Web Programming",
    },

    {
      name: "React",
      category: "FRONTEND",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      className: "react",
      where: "I use it to build interactive frontend interfaces and reusable components.",
      why: "It makes complex user interfaces easier to build and maintain.",
      role: "Frontend Development",
    },

    {
      name: "Vite",
      category: "TOOLING",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      className: "vite",
      where: "I use it to develop and build modern frontend projects.",
      why: "It's fast and provides an excellent development workflow.",
      role: "Build Tool",
    },

    {
      name: "Node.js",
      category: "BACKEND",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      className: "node",
      where: "I use it to run JavaScript on servers and build backend applications.",
      why: "It lets me use JavaScript beyond the browser.",
      role: "Backend Runtime",
    },

    {
      name: "Express.js",
      category: "BACKEND",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      className: "express",
      where: "I use it with Node.js to build APIs, routes and backend services.",
      why: "It simplifies building servers and REST APIs with Node.js.",
      role: "Backend Framework",
    },

    {
      name: "Python",
      category: "LANGUAGE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      className: "python",
      where: "I use it for automation, scripting, data, AI and backend experiments.",
      why: "It's simple, versatile and has a huge ecosystem.",
      role: "Programming & Automation",
    },

    {
      name: "Java",
      category: "LANGUAGE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      className: "java",
      where: "I use it for object-oriented programming and structured applications.",
      why: "It's reliable and widely used for large applications.",
      role: "Application Development",
    },

    {
      name: "C#",
      category: "LANGUAGE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      className: "csharp",
      where: "I use it for .NET applications, software development and experimentation.",
      why: "It's powerful and works closely with the .NET ecosystem.",
      role: "Software Development",
    },

    {
      name: "C++",
      category: "LANGUAGE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      className: "cpp",
      where: "I use it for performance-focused and lower-level programming.",
      why: "It provides strong performance and low-level control.",
      role: "Systems & Performance",
    },

    {
      name: "Rust",
      category: "LANGUAGE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
      className: "rust",
      where: "I use it for systems programming and performance-focused projects.",
      why: "It combines high performance with memory safety.",
      role: "Systems Programming",
    },

    {
      name: "Go",
      category: "LANGUAGE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
      className: "go",
      where: "I use it for APIs, backend services and network applications.",
      why: "It's fast, simple and excellent for scalable servers.",
      role: "Backend & Systems",
    },

    {
      name: "PHP",
      category: "BACKEND",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      className: "php",
      where: "I use it for PHP-based websites, server-rendered apps and CMS projects.",
      why: "It's widely supported and practical for traditional web hosting.",
      role: "Server-side Development",
    },

    {
      name: "TypeScript",
      category: "LANGUAGE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "typescript",
      where: "I use it for larger JavaScript projects that need stronger type safety.",
      why: "It makes complex JavaScript code easier to maintain.",
      role: "Typed Web Development",
    },

    {
      name: "SQL",
      category: "DATABASE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      className: "sql",
      where: "I use it to query and manage relational database data.",
      why: "It's the standard language for relational databases.",
      role: "Database Programming",
    },

    {
      name: "MySQL",
      category: "DATABASE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      className: "mysql",
      where: "I use it for structured application data and backend databases.",
      why: "It's reliable, widely supported and works well with Node.js.",
      role: "Relational Database",
    },

    {
      name: "MongoDB",
      category: "DATABASE",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      className: "mongodb",
      where: "I use it for applications that benefit from flexible document-based data.",
      why: "Its flexible structure works well for certain modern applications.",
      role: "NoSQL Database",
    },

    {
      name: "Git",
      category: "TOOLS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      className: "git",
      where: "I use it to track code changes and manage project versions.",
      why: "It protects project history and makes development safer.",
      role: "Version Control",
    },

    {
      name: "GitHub",
      category: "TOOLS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      className: "github",
      where: "I use it to host repositories, manage code and showcase projects.",
      why: "It provides remote version control and project collaboration.",
      role: "Code Hosting",
    },
  ];

  const openSkill = (skill) => {
    setSelectedSkill(skill);
  };

  const closeSkill = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className="skills-section">

      {/* =========================================
          BACKGROUND SYMBOLS
      ========================================= */}

      <div className="skills-symbol skills-symbol-1">
        &lt;/&gt;
      </div>

      <div className="skills-symbol skills-symbol-2">
        {"{}"}
      </div>

      <div className="skills-symbol skills-symbol-3">
        01
      </div>

      <div className="skills-symbol skills-symbol-4">
        #
      </div>

      <div className="skills-symbol skills-symbol-5">
        $
      </div>


      {/* =========================================
          HEADER
      ========================================= */}

      <div className="skills-header">

        <span className="skills-kicker">
          MY TOOLBOX
        </span>

        <h2>
          MY
          <br />
          <span>STACK.</span>
        </h2>

        <p>
          Technologies, languages and tools I use
          to build digital experiences.
        </p>

      </div>


      {/* =========================================
          SKILLS GRID
      ========================================= */}

      <div className="skills-container">

        <div className="skills-grid-main">

          {skills.map((skill, index) => (

            <button
              key={skill.name}
              type="button"
              className={`technology-card ${skill.className}`}
              onClick={() => openSkill(skill)}
              aria-label={`View ${skill.name} details`}
            >

              {/* Number */}

              <span className="technology-number">
                {String(index + 1).padStart(2, "0")}
              </span>


              {/* Logo */}

              <span className="technology-logo">

                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  loading="lazy"
                />

              </span>


              {/* Details */}

              <span className="technology-details">

                <span className="technology-category">
                  {skill.category}
                </span>

                <strong>
                  {skill.name}
                </strong>

              </span>


              {/* Arrow */}

              <span className="technology-arrow">
                ↗
              </span>

            </button>

          ))}

        </div>


        {/* =========================================
            DEVELOPER PHILOSOPHY
        ========================================= */}

        <div className="skills-philosophy">

          <div className="philosophy-terminal">

            <div className="philosophy-line">

              <span className="code-pink">
                const
              </span>{" "}

              <span className="code-blue">
                mindset
              </span>{" "}

              ={" "}

              <span className="code-yellow">
                "BUILD";
              </span>

            </div>


            <div className="philosophy-line">

              <span className="code-pink">
                while
              </span>{" "}

              (learning) {"{"}

            </div>


            <div className="philosophy-line philosophy-indent">
              improve();
            </div>


            <div className="philosophy-line">
              {"}"}
            </div>


            <div className="philosophy-cursor">
              _
            </div>

          </div>


          <div className="philosophy-label">
            ALWAYS LEARNING • ALWAYS BUILDING
          </div>

        </div>

      </div>


      {/* =========================================
          SKILL DETAIL MODAL
      ========================================= */}

      {selectedSkill && (

        <div
          className="skill-modal-overlay"
          onClick={closeSkill}
        >

          <div
            className="skill-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal Header */}

            <div className="skill-modal-header">

              <div className="skill-modal-title">

                <div
                  className={`modal-logo ${selectedSkill.className}`}
                >

                  <img
                    src={selectedSkill.logo}
                    alt={`${selectedSkill.name} logo`}
                  />

                </div>


                <div>

                  <span>
                    {selectedSkill.category}
                  </span>

                  <h3>
                    {selectedSkill.name}
                  </h3>

                </div>

              </div>


              <button
                type="button"
                className="skill-modal-close"
                onClick={closeSkill}
                aria-label="Close skill details"
              >
                ×
              </button>

            </div>


            {/* Where */}

            <div className="skill-detail-block">

              <span className="detail-label">
                WHERE I USE IT
              </span>

              <p>
                {selectedSkill.where}
              </p>

            </div>


            {/* Why */}

            <div className="skill-detail-block">

              <span className="detail-label">
                WHY I USE IT
              </span>

              <p>
                {selectedSkill.why}
              </p>

            </div>


            {/* Role */}

            <div className="skill-role">

              <span>
                MY ROLE
              </span>

              <strong>
                {selectedSkill.role}
              </strong>

            </div>


            {/* Close */}

            <button
              type="button"
              className="skill-modal-button"
              onClick={closeSkill}
            >
              CLOSE →
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default Skills;