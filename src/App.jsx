const events = [
  {
    date: '[Date]',
    title: '[Event name — e.g. Lunar New Year Festival]',
    description: '[Short description of the event, location, and what to expect.]',
  },
  {
    date: '[Date]',
    title: '[Event name — e.g. General Body Meeting]',
    description: '[Short description of the event, location, and what to expect.]',
  },
  {
    date: '[Date]',
    title: '[Event name — e.g. Culture Night]',
    description: '[Short description of the event, location, and what to expect.]',
  },
]

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#top">
            <img src="/logo.png" alt="ASA dragon crest logo" />
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="container">
          <img className="hero-logo" src="/logo.png" alt="ASA dragon crest logo" />
          <h1>
            Asian Student <span className="gold-text">Association</span>
          </h1>
          <p className="hero-sub">
            [One or two sentences on ASA's mission — building community, celebrating
            Asian and Asian American culture, and creating a home on campus for
            [Your School Name] students.]
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Join ASA</a>
            <a className="btn btn-outline" href="#events">See Events</a>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container about-grid">
          <div className="about-copy">
            <p className="eyebrow">About Us</p>
            <h2>Who We Are</h2>
            <p>
              [Paragraph introducing ASA: when it was founded, what it does, and who
              it's for. Mention the communities and cultures represented, and what
              makes your chapter distinct.]
            </p>
            <p>
              [Second paragraph — what members can expect: social events, cultural
              celebrations, mentorship, advocacy, or partnerships with other orgs.]
            </p>
            <div className="about-stats">
              <div className="stat">
                <strong>[#]</strong>
                <span>Active Members</span>
              </div>
              <div className="stat">
                <strong>[#]</strong>
                <span>Events / Year</span>
              </div>
              <div className="stat">
                <strong>[Year]</strong>
                <span>Founded</span>
              </div>
            </div>
          </div>
          <div className="about-art">
            <img src="/logo.png" alt="ASA dragon crest logo" />
          </div>
        </div>
      </section>

      <section id="events" className="events">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What's Happening</p>
            <h2>Upcoming Events</h2>
            <p>[Short intro sentence about the kinds of events ASA runs.]</p>
          </div>
          <div className="event-grid">
            {events.map((event) => (
              <div className="event-card" key={event.title}>
                <span className="event-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contact-inner">
          <p className="eyebrow">Get Involved</p>
          <h2>Connect With ASA</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 480 }}>
            [Sentence inviting people to reach out or join — e.g. "Follow us on social
            media or email us to get involved."]
          </p>
          <div className="contact-links">
            <a href="mailto:[asa@yourschool.edu]">Email</a>
            <a href="[Instagram URL]">Instagram</a>
            <a href="[Discord/GroupMe URL]">Discord</a>
            <a href="[Linktree or membership form URL]">Join</a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Asian Student Association &middot; [Your School Name]</p>
      </footer>
    </>
  )
}
