import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      {/* =========================================
          RETRO DECORATIONS
      ========================================= */}

      <div className="about-symbol about-symbol-1" aria-hidden="true">
        +
      </div>

      <div className="about-symbol about-symbol-2" aria-hidden="true">
        &lt;/&gt;
      </div>

      <div className="about-symbol about-symbol-3" aria-hidden="true">
        ?
      </div>

      <div className="about-symbol about-symbol-4" aria-hidden="true">
        @
      </div>


      {/* =========================================
          SECTION HEADER
      ========================================= */}

      <div className="about-header">

        <span className="about-kicker">
          ABOUT ME
        </span>

        <h2>
          More Than
          <br />
          Just a <span>Developer.</span>
        </h2>

      </div>


      {/* =========================================
          MAIN ABOUT CONTENT
      ========================================= */}

      <div className="about-container">


        {/* =====================================
            DEVELOPER TERMINAL
        ===================================== */}

        <div className="about-visual">

          <div className="developer-terminal">

            <div className="terminal-header">

              <div className="terminal-dots">

                <span className="terminal-dot dot-red"></span>

                <span className="terminal-dot dot-yellow"></span>

                <span className="terminal-dot dot-green"></span>

              </div>

              <div className="terminal-title">
                prantik@dev ~
              </div>

            </div>


            {/* Terminal content */}

            <div className="terminal-body">

              <div className="terminal-line">

                <span className="terminal-prompt">
                  $
                </span>

                <span>
                  whoami
                </span>

              </div>

              <div className="terminal-output terminal-highlight">
                &gt; Prantik Chakraborty
              </div>


              <div className="terminal-line terminal-gap">

                <span className="terminal-prompt">
                  $
                </span>

                <span>
                  role
                </span>

              </div>

              <div className="terminal-output">
                &gt; Web Developer
              </div>


              <div className="terminal-line terminal-gap">

                <span className="terminal-prompt">
                  $
                </span>

                <span>
                  from
                </span>

              </div>

              <div className="terminal-output">
                &gt; Assam, India
              </div>


              <div className="terminal-line terminal-gap">

                <span className="terminal-prompt">
                  $
                </span>

                <span>
                  stack
                </span>

              </div>

              <div className="terminal-stack">

                <span className="terminal-tech tech-react">
                  React
                </span>

                <span className="terminal-tech tech-js">
                  JavaScript
                </span>

                <span className="terminal-tech tech-node">
                  Node.js
                </span>

                <span className="terminal-tech tech-python">
                  Python
                </span>

              </div>


              <div className="terminal-line terminal-gap">

                <span className="terminal-prompt">
                  $
                </span>

                <span>
                  mindset
                </span>

              </div>

              <div className="terminal-output terminal-mindset">
                &gt; BUILD &gt; LEARN &gt; IMPROVE
              </div>


              {/* Cursor */}

              <div className="terminal-cursor-line">

                <span className="terminal-prompt">
                  $
                </span>

                <span className="terminal-cursor"></span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            TEXT SIDE
        ===================================== */}

        <div className="about-content">

          <p className="about-intro">

            I'm{" "}

            <strong>
              Prantik
            </strong>

            , a web developer from Assam, India.
            When I was around 10, I dreamed of building
            my own apps and creating things people could
            actually use.

          </p>


          <p className="about-text">

            Today, I'm slowly turning those dreams into
            reality — building websites, learning new
            technologies and figuring things out along
            the way.

          </p>


          {/* =====================================
              INFO GRID
          ===================================== */}

          <div className="about-info-grid">

            <div className="about-info-card card-pink">

              <span
                className="info-icon"
                aria-hidden="true"
              >
                👤
              </span>

              <div>

                <small>
                  NAME
                </small>

                <strong>
                  Prantik Chakraborty
                </strong>

              </div>

            </div>


            <div className="about-info-card card-blue">

              <span
                className="info-icon"
                aria-hidden="true"
              >
                ◷
              </span>

              <div>

                <small>
                  AGE
                </small>

                <strong>
                  19
                </strong>

              </div>

            </div>


            <div className="about-info-card card-purple">

              <span
                className="info-icon"
                aria-hidden="true"
              >
                ⌖
              </span>

              <div>

                <small>
                  FROM
                </small>

                <strong>
                  Assam, India
                </strong>

              </div>

            </div>


            <div className="about-info-card card-yellow">

              <span
                className="info-icon"
                aria-hidden="true"
              >
                &lt;/&gt;
              </span>

              <div>

                <small>
                  FOCUS
                </small>

                <strong>
                  Web Development
                </strong>

              </div>

            </div>

          </div>


          {/* =====================================
              BOTTOM STATEMENT
          ===================================== */}

          <div className="about-statement">

            <span
              className="statement-line"
              aria-hidden="true"
            ></span>

            <p>

              <strong>
                STILL LEARNING.
              </strong>{" "}

              <strong>
                STILL BUILDING.
              </strong>{" "}

              <span>
                STILL DREAMING.
              </span>

            </p>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM RETRO STRIP
      ========================================= */}

      <div className="about-bottom-strip">

        <span>
          &lt; CODE
        </span>

        <span>
          DESIGN &gt;
        </span>

        <span>
          CREATE *
        </span>

        <span>
          LEARN //
        </span>

      </div>

    </section>
  );
}

export default About;