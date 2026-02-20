"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          nk<span>.com</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#proof">Work</a>
          <a href="#about">About</a>
          <a
            href="https://t.me/prophet0811"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message me &rarr;
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div
          className="glow-orb"
          style={{ top: "-100px", left: "-200px" }}
        ></div>

        <div className="hero-left">
          <div className="avail-badge">
            <div className="avail-dot"></div>
            Taking new clients &mdash; Berlin &amp; Remote
          </div>

          <div className="hero-eyebrow">
            AI Consultant &middot; Automation Specialist
          </div>

          <h1 className="hero-title">
            <span className="first">NIKITA</span>
            <span className="last">KAMINSKIY</span>
          </h1>

          <p className="hero-subtitle">
            Your competitors are already using AI.
            <br />
            I help executives understand it, adopt it, and
            <br />
            turn it into a real competitive edge &mdash; fast.
          </p>

          <div className="hero-tags">
            <span className="tag amber">Berlin, DE</span>
            <span className="tag">Process Automation</span>
            <span className="tag">AI Agents</span>
            <span className="tag">Executive Training</span>
            <span className="tag">10+ Years in IT</span>
          </div>

          <div className="hero-actions">
            <a
              href="https://t.me/prophet0811"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write on Telegram
            </a>
            <a href="#services" className="btn-ghost">
              See what I do{" "}
              <span style={{ color: "var(--amber)" }}>&rarr;</span>
            </a>
          </div>
        </div>

        {/* TERMINAL */}
        <div className="terminal-widget">
          <div className="term-header">
            <div className="term-dots">
              <div className="term-dot dot-red"></div>
              <div className="term-dot dot-yellow"></div>
              <div className="term-dot dot-green"></div>
            </div>
            <div className="term-title">~/nik-brain &mdash; zsh</div>
          </div>
          <div className="term-body">
            <div className="term-line">
              <span className="term-time">08:47:03</span>
              <span className="term-prompt">~</span>
              <span className="term-cmd"> ai-tools --latest</span>
            </div>
            <div className="term-output">
              <span className="ok">&uarr;</span> Claude 4 &middot; GPT-5
              &middot; Gemini 3
              <br />
              <span className="ok">&uarr;</span> OpenClaw &middot; Cursor
              &middot; MCP agents
              <br />
              <span className="muted">Testing 6 new tools this week...</span>
            </div>

            <div className="term-line">
              <span className="term-time">09:02:14</span>
              <span className="term-prompt">~</span>
              <span className="term-cmd">
                {" "}
                automate --client &quot;inbox&quot;
              </span>
            </div>
            <div className="term-output">
              <span className="ok">&#10003;</span> Email triage agent deployed
              <br />
              <span className="ok">&#10003;</span> Saved ~3h/day for CEO
              <br />
              <span className="muted">ROI: first week</span>
            </div>

            <div className="term-line">
              <span className="term-time">09:15:51</span>
              <span className="term-prompt">~</span>
              <span className="term-cmd"> status --consulting</span>
            </div>
            <div className="term-output">
              <span className="ok">&#10003;</span> Berlin, DE{" "}
              <span className="muted">(UTC+1)</span>
              <br />
              <span className="ok">&#10003;</span> Available for new clients
              <br />
              <span className="muted">Response time: &lt; 24h</span>
            </div>

            <div className="term-line" style={{ marginTop: "8px" }}>
              <span className="term-time">09:16:02</span>
              <span className="term-prompt" style={{ color: "var(--amber)" }}>
                ~/consulting
              </span>
              <span className="term-cmd">
                {" "}
                _<span className="term-cursor"></span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="divider"></div>
      <div className="stats">
        <div className="stat-item reveal">
          <div className="stat-num">10+</div>
          <div className="stat-label">Years in IT &amp; Automation</div>
        </div>
        <div
          className="stat-item reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="stat-num">50+</div>
          <div className="stat-label">AI Tools Tested</div>
        </div>
        <div
          className="stat-item reveal"
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="stat-num">24/7</div>
          <div className="stat-label">AI Running for Me</div>
        </div>
        <div
          className="stat-item reveal"
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="stat-num">$0</div>
          <div className="stat-label">Learning Cost for You</div>
        </div>
      </div>
      <div className="divider"></div>

      {/* SERVICES */}
      <section id="services">
        <div className="section-header reveal">
          <h2 className="section-title">
            What I <span>Do For You</span>
          </h2>
          <a
            href="https://t.me/prophet0811"
            target="_blank"
            rel="noopener noreferrer"
            className="section-link"
          >
            Let&apos;s talk &rarr;
          </a>
        </div>

        <div
          className="skills-grid"
          style={{ gridTemplateColumns: "repeat(2,1fr)" }}
        >
          <div className="skill-card reveal">
            <div className="skill-icon">&#9881;&#65039;</div>
            <div className="skill-name">Process Automation</div>
            <div className="skill-desc">
              We map your most repetitive, time-consuming workflows &mdash;
              reporting, inbox triage, data entry, approvals &mdash; and replace
              them with AI agents that work around the clock. Your team stops
              doing robot work and starts doing human work.
            </div>
          </div>
          <div
            className="skill-card reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="skill-icon">&#129504;</div>
            <div className="skill-name">AI Strategy &amp; Training</div>
            <div className="skill-desc">
              Hands-on sessions for you and your leadership team. No buzzwords,
              no theory. I show you exactly which AI tools are relevant to your
              business, how to use them effectively, and how to build a culture
              of AI-first thinking inside your company.
            </div>
          </div>
          <div
            className="skill-card reveal"
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="skill-icon">&#129302;</div>
            <div className="skill-name">Custom AI Agents</div>
            <div className="skill-desc">
              Need an agent that handles customer inquiries, qualifies leads,
              monitors competitors, or generates weekly reports? I build
              purpose-built AI agents tailored to your specific business &mdash;
              deployed, tested, and handed over to your team.
            </div>
          </div>
          <div
            className="skill-card reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="skill-icon">&#128640;</div>
            <div className="skill-name">AI-Augmented Teams</div>
            <div className="skill-desc">
              Instead of replacing people, we amplify them. I identify where each
              of your team members loses the most time and build AI co-pilots for
              those tasks &mdash; so one person does the work of three without
              burning out.
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PROOF */}
      <section id="proof">
        <div className="section-header reveal">
          <h2 className="section-title">
            Proof of <span>Depth</span>
          </h2>
          <span
            className="section-link"
            style={{ color: "var(--text-muted)", cursor: "default" }}
          >
            Personal projects that prove I live in this world
          </span>
        </div>

        <div className="projects-grid">
          <a href="#" className="project-card reveal">
            <div className="project-top">
              <div className="project-icon">&#129302;</div>
              <div className="project-arrow">&nearr;</div>
            </div>
            <div className="project-path">
              $ <span>./built/</span>personal-ai-assistant
            </div>
            <div className="project-name">AI Personal OS</div>
            <div className="project-desc">
              Runs on a Raspberry Pi on my desk. Connects to my calendar,
              messages, notes, and tasks. Monitors projects, sends proactive
              updates, and executes multi-step workflows &mdash; all from a
              Telegram chat. This is what I build for clients, but for myself
              first.
            </div>
            <div className="project-meta">
              <span className="project-tag highlight">OpenClaw</span>
              <span className="project-tag highlight">Claude API</span>
              <span className="project-tag">Self-hosted</span>
              <span className="project-tag">Always running</span>
            </div>
          </a>

          <a
            href="#"
            className="project-card reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="project-top">
              <div className="project-icon">&#128200;</div>
              <div className="project-arrow">&nearr;</div>
            </div>
            <div className="project-path">
              $ <span>./built/</span>trading-automation
            </div>
            <div className="project-name">Trading Bots</div>
            <div className="project-desc">
              Automated trading tools I use with real money &mdash; prediction
              market arbitrage, Telegram signal analysis, bridge monitoring.
              Every system is live in production, not a demo. I only build things
              I trust enough to use myself.
            </div>
            <div className="project-meta">
              <span className="project-tag highlight">Python</span>
              <span className="project-tag highlight">Real P&amp;L</span>
              <span className="project-tag">Polymarket</span>
              <span className="project-tag">Automated 24/7</span>
            </div>
          </a>

          <a
            href="#"
            className="project-card reveal"
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="project-top">
              <div className="project-icon">&#8986;</div>
              <div className="project-arrow">&nearr;</div>
            </div>
            <div className="project-path">
              $ <span>./built/</span>garmin-watch-faces
            </div>
            <div className="project-name">Digital Nostalgia</div>
            <div className="project-desc">
              A published collection of retro-aesthetic Garmin watch faces on the
              Connect IQ store. Because side projects should ship. Proves that I
              take things from idea to finished product &mdash; not just
              prototypes.
            </div>
            <div className="project-meta">
              <span className="project-tag highlight">Connect IQ</span>
              <span className="project-tag">Published</span>
              <span className="project-tag">Product Design</span>
              <span className="project-tag">Monkey C</span>
            </div>
          </a>

          <a
            href="#"
            className="project-card reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="project-top">
              <div className="project-icon">&#128424;</div>
              <div className="project-arrow">&nearr;</div>
            </div>
            <div className="project-path">
              $ <span>./built/</span>physical-products
            </div>
            <div className="project-name">3D Product Business</div>
            <div className="project-desc">
              Design, print, sell. Running an Etsy shop with 3D-printed products
              from my Bambu P1P. End-to-end ownership of a physical product
              business. I understand both the digital and operational sides of
              running something real.
            </div>
            <div className="project-meta">
              <span className="project-tag highlight">Bambu P1P</span>
              <span className="project-tag">Etsy</span>
              <span className="project-tag">Product ops</span>
              <span className="project-tag">E-commerce</span>
            </div>
          </a>
        </div>
      </section>

      <div className="divider"></div>

      {/* ABOUT */}
      <section id="about">
        <div className="about-grid">
          <div>
            <div
              className="section-header reveal"
              style={{ marginBottom: "32px" }}
            >
              <h2 className="section-title">
                Why <span>Me</span>
              </h2>
            </div>
            <div className="about-text reveal">
              <p>
                Most AI consultants either come from academia or big tech. They
                understand AI theoretically. I understand it{" "}
                <span className="highlight">operationally</span> &mdash;
                because I build and run AI systems every single day, as a hobby,
                for fun.
              </p>
              <p>
                I have a personal AI assistant running on my desk 24/7. I test
                new AI tools the week they launch. I build trading bots with real
                money on the line. I automate my own life before I automate
                anyone else&apos;s. That&apos;s not a resume line &mdash;{" "}
                <strong>that&apos;s my Tuesday evening.</strong>
              </p>
              <p>
                This obsession makes me unusually useful to executives who feel
                the AI pressure but don&apos;t have time to wade through the
                noise. I&apos;ve already done that. I know what actually works in
                production, what&apos;s hype, and what{" "}
                <span className="highlight">
                  specifically applies to your business
                </span>{" "}
                &mdash; not a generic use case.
              </p>
              <p>
                Based in <strong>Berlin</strong>. Work remotely with clients
                across Europe. Fluent in English, Russian, and just enough German
                to survive a Beh&ouml;rde appointment.
              </p>
            </div>
          </div>

          <div
            className="about-sidebar reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="info-block">
              <div className="info-block-title">{"// Engagement Options"}</div>
              <div className="info-row">
                <span className="label">First contact</span>
                <span className="value green">Free &middot; no pressure</span>
              </div>
              <div className="info-row">
                <span className="label">AI audit</span>
                <span className="value amber">1-day workshop</span>
              </div>
              <div className="info-row">
                <span className="label">Build &amp; deploy</span>
                <span className="value">Project-based</span>
              </div>
              <div className="info-row">
                <span className="label">Retainer</span>
                <span className="value">Monthly advisory</span>
              </div>
            </div>

            <div className="info-block">
              <div className="info-block-title">{"// Good Fit If You..."}</div>
              <div className="info-row">
                <span className="label" style={{ color: "var(--green)" }}>
                  &#10003;
                </span>
                <span className="value" style={{ fontSize: "11px" }}>
                  Run a business with repetitive workflows
                </span>
              </div>
              <div className="info-row">
                <span className="label" style={{ color: "var(--green)" }}>
                  &#10003;
                </span>
                <span className="value" style={{ fontSize: "11px" }}>
                  Feel AI FOMO but don&apos;t know where to start
                </span>
              </div>
              <div className="info-row">
                <span className="label" style={{ color: "var(--green)" }}>
                  &#10003;
                </span>
                <span className="value" style={{ fontSize: "11px" }}>
                  Want results, not a PowerPoint strategy
                </span>
              </div>
              <div className="info-row">
                <span className="label" style={{ color: "var(--text-muted)" }}>
                  &#10007;
                </span>
                <span
                  className="value"
                  style={{ fontSize: "11px", color: "var(--text-muted)" }}
                >
                  Looking for an hourly dev for bug fixes
                </span>
              </div>
            </div>

            <div className="info-block">
              <div className="info-block-title">{"// Contact"}</div>
              <div className="info-row">
                <span className="label">Telegram</span>
                <a
                  href="https://t.me/prophet0811"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--amber)",
                    textDecoration: "none",
                    fontSize: "12px",
                  }}
                >
                  @prophet0811
                </a>
              </div>
              <div className="info-row">
                <span className="label">Email</span>
                <a
                  href="mailto:nik@nikitakaminskiy.com"
                  style={{
                    color: "var(--text)",
                    textDecoration: "none",
                    fontSize: "12px",
                  }}
                >
                  nik@nikitakaminskiy.com
                </a>
              </div>
              <div className="info-row">
                <span className="label">Location</span>
                <span className="value">Berlin, DE &middot; Remote OK</span>
              </div>
              <div className="info-row">
                <span className="label">Response</span>
                <span className="value green">Within 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="divider"></div>
      <section style={{ textAlign: "center", padding: "100px 40px" }}>
        <div className="reveal">
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--amber)",
              marginBottom: "20px",
            }}
          >
            {"// Next step"}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Barlow Condensed', sans-serif",
              fontSize: "clamp(36px,5vw,64px)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: "0.95",
              letterSpacing: "-0.5px",
              marginBottom: "24px",
            }}
          >
            Stop watching AI happen.
            <br />
            <span style={{ color: "var(--amber)" }}>Start using it.</span>
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-dim)",
              maxWidth: "480px",
              margin: "0 auto 40px",
              lineHeight: "1.7",
            }}
          >
            Drop me a message on Telegram or email. No forms, no calls, no pitch
            decks. Just tell me what your business does and where you feel the
            friction &mdash; I&apos;ll respond with a clear first take.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://t.me/prophet0811"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: "14px", padding: "16px 40px" }}
            >
              Write on Telegram
            </a>
            <a
              href="mailto:nik@nikitakaminskiy.com"
              className="btn-ghost"
              style={{ fontSize: "13px" }}
            >
              or send an email &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="divider"></div>
      <footer>
        <div>
          <div className="footer-name">nikitakaminskiy.com</div>
          <div className="footer-role">
            AI Consultant &middot; Automation &middot; Berlin
          </div>
          <div className="footer-copy">
            &copy; 2026 Nikita Kaminskiy
          </div>
        </div>
        <div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#proof">Work</a>
            <a href="#about">About</a>
            <a href="mailto:nik@nikitakaminskiy.com">Email</a>
            <a
              href="https://t.me/prophet0811"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
