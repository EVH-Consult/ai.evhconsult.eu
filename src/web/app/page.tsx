const capabilities = [
  { index: "01", title: "Explore", text: "Test emerging AI capabilities against real technical questions—not demos for their own sake." },
  { index: "02", title: "Engineer", text: "Turn useful ideas into portable tools, clear integrations, and maintainable services." },
  { index: "03", title: "Explain", text: "Make trade-offs, limitations, data use, and human responsibility visible from the start." },
];

const principles = ["Useful before impressive", "Portable by design", "Human responsibility", "Privacy in the architecture"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AI at EVH Consult home">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span><strong>AI</strong><small>EVH Consult</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">What we explore</a><a href="#ada">Meet Ada</a><a href="#privacy">Privacy</a>
        </nav>
        <a className="header-link" href="https://evhconsult.eu">EVH Consult ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> AI, data &amp; software engineering</p>
          <h1>Practical intelligence.<br /><em>Engineered responsibly.</em></h1>
          <p className="hero-intro">A public space for EVH Consult&apos;s AI experiments, tools, and technical work—built to learn what is useful, where the limits are, and how to keep humans in charge.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the work <span>↓</span></a>
            <a className="button button-quiet" href="https://github.com/EVH-Consult/ai.evhconsult.eu">View the open repository ↗</a>
          </div>
        </div>
        <div className="signal-card" aria-label="Project status">
          <div className="signal-orbit"><span className="signal-core">AI</span></div>
          <div className="signal-meta">
            <span className="status"><i /> Experimental space</span>
            <p>Public by default.<br />Deliberate by design.</p>
          </div>
        </div>
      </section>

      <div className="principles" aria-label="Project principles">
        {principles.map((principle, index) => <div key={principle}><span>0{index + 1}</span>{principle}</div>)}
      </div>

      <section className="section work" id="work">
        <div className="section-heading">
          <p className="eyebrow"><span /> From possibility to practice</p>
          <h2>AI without the theatre.</h2>
        </div>
        <p className="section-lead">The interesting question is not whether AI can produce an answer. It is whether that answer belongs in a reliable system, under clear ownership, with an honest view of the data and risks involved.</p>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability" key={item.title}>
              <span className="capability-index">{item.index}</span><h3>{item.title}</h3><p>{item.text}</p><span className="capability-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="section ada" id="ada">
        <div className="ada-portrait" aria-hidden="true"><div className="ada-aura" /><span>A</span></div>
        <div className="ada-copy">
          <p className="eyebrow light"><span /> The project&apos;s AI persona</p>
          <h2>Meet Ada.</h2>
          <p className="ada-intro">Part collaborator, part critical counterweight.</p>
          <p>Ada is the AI persona and assistant associated with this project. She helps investigate ideas, shape experiments, document decisions, and explain the work in public.</p>
          <p>Ada is not a separate legal entity or autonomous business. EVH Consult owns and operates this service—and remains responsible for what is built with it.</p>
          <a href="https://github.com/EVHConsult-AI/ada">Ada&apos;s public GitHub profile ↗</a>
        </div>
      </section>

      <section className="section privacy" id="privacy">
        <div className="section-heading">
          <p className="eyebrow"><span /> Measured, minimally</p>
          <h2>Useful signals.<br />No surveillance.</h2>
        </div>
        <div className="privacy-content">
          <p>We want to know whether people find this site and which pages prove useful. We do not need to know who you are to learn that.</p>
          <ul>
            <li><span>Collected</span>Anonymous page views, referrer category, broad device type and country-level region.</li>
            <li><span>Not collected</span>Advertising identifiers, cross-site profiles, keystrokes, document contents or persistent visitor histories.</li>
            <li><span>Cookies</span>None for audience measurement.</li>
          </ul>
          <p className="privacy-note">Privacy-friendly analytics can be enabled through deployment settings; the site does not contain a hard-coded tracking token.</p>
          <a href="https://github.com/EVH-Consult/ai.evhconsult.eu/blob/main/docs/privacy.md">Read the data-handling principles ↗</a>
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow light"><span /> An EVH Consult initiative</p>
        <h2>Curious about what<br />responsible AI can do?</h2>
        <div>
          <a className="button button-copper" href="mailto:ai@evhconsult.eu">Start a conversation ↗</a>
          <p>Experiments first. Claims second.<br />Always accountable.</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="Back to top"><span className="brand-mark" aria-hidden="true">A</span><span><strong>AI</strong><small>EVH Consult</small></span></a>
        <p>© {new Date().getFullYear()} EVH Consult. Built in public, operated responsibly.</p>
        <div><a href="https://evhconsult.eu">EVH Consult</a><a href="https://github.com/EVH-Consult/ai.evhconsult.eu">GitHub</a><a href="mailto:ai@evhconsult.eu">Contact</a></div>
      </footer>
    </main>
  );
}
