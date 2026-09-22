import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'

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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <a className="nav-brand" href="#top" onClick={closeMenu}>
            <img src="/logo.png" alt="ASA dragon crest logo" />
          </a>
          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#events" onClick={closeMenu}>Events</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="container">
          <h1>
            ASA <span className="gold-text">@ Purdue<br />Indianapolis</span>
          </h1>
          <p className="hero-sub">Representing all Asians across campus!</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Join ASA</a>
            <a className="btn btn-outline" href="#events">See Events</a>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container about-grid">
          <Reveal className="about-copy">
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
          </Reveal>
          <Reveal className="about-art" delay={120}>
            <img src="/logo.png" alt="ASA dragon crest logo" />
          </Reveal>
        </div>
      </section>

      <section id="events" className="events">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What's Happening</p>
            <h2>Upcoming Events</h2>
            <p>[Short intro sentence about the kinds of events ASA runs.]</p>
          </Reveal>
          <div className="event-grid">
            {events.map((event, i) => (
              <Reveal as="div" className="event-card" key={event.title} delay={i * 100}>
                <span className="event-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <Reveal className="container contact-inner">
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
        </Reveal>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} ASA @ PUI</p>
      </footer>
    </>
  )
}
