import "./Journey.css";

function Journey() {
  const journey = [
    {
      number: "01",
      year: "2018",
      title: "THE FIRST LINE",
      text: "Wrote my first Hello World HTML code in Notepad. That simple line of code was the beginning of my journey into technology.",
      tech: "HTML • NOTEPAD",
      color: "pink",
    },

    {
      number: "02",
      year: "2019",
      title: "EXPLORING",
      text: "Started experimenting with HTML, CSS and basic web pages, learning how websites are structured and styled.",
      tech: "HTML • CSS",
      color: "blue",
    },

    {
      number: "03",
      year: "2020",
      title: "FIRST WEBSITE",
      text: "Created my first complete website. This was when web development started becoming more than just experimentation.",
      tech: "HTML • CSS • JAVASCRIPT",
      color: "purple",
    },

    {
      number: "04",
      year: "2021",
      title: "GOING DEEPER",
      text: "Started learning programming more seriously and explored JavaScript, web development and application logic.",
      tech: "JAVASCRIPT • WEB DEVELOPMENT",
      color: "yellow",
    },

    {
      number: "05",
      year: "2024",
      title: "NEW LANGUAGES",
      text: "Expanded beyond web development and learned Rust, C# and Java while continuing to improve my development skills.",
      tech: "RUST • C# • JAVA",
      color: "pink",
    },

    {
      number: "06",
      year: "2025",
      title: "REAL-WORLD BUILDING",
      text: "Started building larger real-world websites, business systems and complete digital projects.",
      tech: "REACT • NODE.JS • MYSQL • GIT",
      color: "blue",
    },

    {
      number: "07",
      year: "2026",
      title: "BUILDING THE FUTURE",
      text: "Turning everything I've learned into real products, client projects and larger digital experiences.",
      tech: "FULL-STACK • SYSTEMS • PRODUCTS",
      color: "purple",
    },
  ];

  return (
    <section id="journey" className="journey-section">

      {/* Background */}

      <div className="journey-grid"></div>

      <div className="journey-symbol journey-symbol-1">
        {"</>"}
      </div>

      <div className="journey-symbol journey-symbol-2">
        {"{}"}
      </div>

      <div className="journey-symbol journey-symbol-3">
        +
      </div>


      {/* Header */}

      <div className="journey-header">

        <div>

          <span className="journey-label">
            THE STORY SO FAR
          </span>

          <h2>
            MY
            <br />
            <span>JOURNEY.</span>
          </h2>

        </div>


        <div className="journey-intro">

          <p>
            From writing my first line of HTML
            to building real digital products.
            This is how it all started.
          </p>

          <span className="journey-code">
            /02 — JOURNEY
          </span>

        </div>

      </div>


      {/* Timeline */}

      <div className="journey-timeline">

        <div className="journey-line"></div>


        {journey.map((item) => (

          <article
            key={item.number}
            className={`journey-item journey-${item.color}`}
          >

            <div className="journey-marker">

              <span>
                {item.number}
              </span>

            </div>


            <div className="journey-card">

              <div className="journey-card-top">

                <span className="journey-year">
                  {item.year}
                </span>

                <span className="journey-status">
                  MILESTONE
                </span>

              </div>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.text}
              </p>


              <div className="journey-tech">
                {item.tech}
              </div>

            </div>

          </article>

        ))}

      </div>


      {/* Current Status */}

      <div className="journey-current">

        <div className="journey-current-left">

          <span className="current-label">
            2018 → 2026
          </span>

          <h3>
            8 YEARS
            <br />
            OF BUILDING.
          </h3>

        </div>


        <div className="journey-current-right">

          <p>
            And I'm still just getting started.
            I'm continuing to learn, experiment
            and turn ideas into things people
            can actually use.
          </p>


          <div className="current-status">

            <span className="status-dot"></span>

            <span>
              STILL LEARNING • STILL BUILDING
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Journey;