import SiteNavigation from "./site-navigation";

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
        <div className="site-container header-inner">
          <a className="brand" href="#top" aria-label="AI at EVH Consult home">
            <img src="https://evhconsult.eu/assets/evh-consult-logo.png" alt="EVH Consult" width="851" height="315" />
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-ai">AI</span>
          </a>
          <SiteNavigation />
        </div>
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
          <p>We use only the aggregate operational counters already produced by our Azure hosting platform. No separate audience analytics service is enabled.</p>
          <ul>
            <li><span>Measured</span>Aggregate site hits, transferred bytes and service errors.</li>
            <li><span>Not measured</span>Unique visitors, referral sources, device profiles, location, advertising identifiers or persistent visitor histories.</li>
            <li><span>Browser tracking</span>No analytics script and no audience-measurement cookies.</li>
          </ul>
          <p className="privacy-note">These basic service metrics show whether the site is being reached; they do not identify individual visitors.</p>
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

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <a className="footer-brand" href="#top" aria-label="AI at EVH Consult home">
            <img src="https://evhconsult.eu/assets/evh-consult-logo.png" alt="EVH Consult" width="851" height="315" />
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-ai">AI</span>
          </a>
          <p>© {new Date().getFullYear()} EVH Consult. Built in public, operated responsibly.</p>
          <div className="footer-links"><a href="https://evhconsult.eu">EVH Consult</a><a href="https://ada.evhconsult.eu">Ada</a><a href="https://github.com/EVH-Consult/ai.evhconsult.eu">GitHub</a><a href="mailto:ai@evhconsult.eu">Contact</a></div>
        </div>
      </footer>
    </main>
  );
}
