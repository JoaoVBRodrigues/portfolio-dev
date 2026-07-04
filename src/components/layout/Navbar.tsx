'use client'

import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section detection
      const sections = ['about', 'services', 'projects', 'contact']
      const current = sections.find((section) => {
        const el = document.getElementById(section)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      setActiveSection(current ? `#${current}` : '')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on nav click
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a href="#" className={styles.logo} aria-label="João V. B. Rodrigues - Início">
          <span className={styles.logoText}>JVB</span>
          <span className={styles.logoDot}>.dev</span>
        </a>

        {/* Desktop nav */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.link} ${activeSection === link.href ? styles.active : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`${styles.ctaBtn} btn btn-primary`}>
          <span>Contratar</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`} aria-hidden={!menuOpen}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={handleNavClick}
              >
                <span className={styles.mobileLinkNum}>
                  {String(navLinks.indexOf(navLinks.find(l => l.href === link.href)!) + 1).padStart(2, '0')}
                </span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={`${styles.mobileCta} btn btn-primary`} onClick={handleNavClick}>
              <span>Contratar</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
