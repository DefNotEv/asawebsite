import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import { IconInstagram, IconDiscord, IconLinkedIn } from './Icons.jsx'

const INSTAGRAM_URL = 'https://instagram.com/asapurdueindy'
const DISCORD_URL = 'https://discord.gg/4FEtT9pted'
const LINKEDIN_URL = 'https://www.linkedin.com/company/asapurdue'

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
            <li className="nav-icons-mobile">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" onClick={closeMenu}>
                <IconInstagram width={21} height={21} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" onClick={closeMenu}>
                <IconLinkedIn width={21} height={21} />
              </a>
              <a href={DISCORD_URL} target="_blank" rel="noreferrer" aria-label="Discord" onClick={closeMenu}>
                <IconDiscord width={21} height={21} />
              </a>
            </li>
          </ul>
          <div className="nav-icons">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
              <IconInstagram width={20} height={20} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn width={20} height={20} />
            </a>
            <a href={DISCORD_URL} target="_blank" rel="noreferrer" aria-label="Discord">
              <IconDiscord width={20} height={20} />
            </a>
          </div>
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
              ASA @ Purdue Indianapolis is a student-run organization built to represent
              and celebrate the full breadth of Asian identity on campus — East, South,
              Southeast, and Central Asian cultures alike. We're a home base for Asian
              students to connect with each other, and an open door for anyone curious
              to learn more about our cultures.
            </p>
            <p>
              Through cultural celebrations, socials, workshops, and collaborations with
              other student organizations, we create space for community, identity, and
              friendship on campus. Whether you're looking to stay connected to your
              roots or explore a culture that's new to you, there's a place for you in ASA.
            </p>
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
          </Reveal>
          <Reveal className="coming-soon" delay={100}>
            <span className="eyebrow">Coming Soon</span>
            <p>We're planning our next events — check back soon or follow us on social media for updates!</p>
          </Reveal>
        </div>
      </section>

      <section id="contact">
        <Reveal className="container contact-inner">
          <p className="eyebrow">Get Involved</p>
          <h2>Connect With ASA</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 480 }}>
            Follow us on Instagram or join our Discord to stay in the loop on events,
            meetings, and everything else ASA is up to.
          </p>
          <div className="contact-links">
            <a href="mailto:[asa@yourschool.edu]">Email</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={DISCORD_URL} target="_blank" rel="noreferrer">Discord</a>
          </div>
        </Reveal>
      </section>

      <footer>
        <div className="footer-icons">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
            <IconInstagram width={20} height={20} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <IconLinkedIn width={20} height={20} />
          </a>
          <a href={DISCORD_URL} target="_blank" rel="noreferrer" aria-label="Discord">
            <IconDiscord width={20} height={20} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} ASA @ PUI</p>
      </footer>
    </>
  )
}
