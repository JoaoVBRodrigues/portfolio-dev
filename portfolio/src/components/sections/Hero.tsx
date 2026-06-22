'use client'

import { useEffect, useState } from 'react'
import { Mail, ChevronDown, Terminal } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import styles from './Hero.module.css'
import GlitchText from '@/components/ui/GlitchText'

const TYPING_STRINGS = [
  'WordPress Developer',
  'PHP & Laravel Engineer',
  'React & Next.js Builder',
  'Full-Stack Freelancer',
]

// Pre-computed particle positions (module-level seed for stability)
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  left: (i * 37 + 13) % 97,
  top: (i * 53 + 7) % 93,
  delay: (i * 0.43) % 4,
  duration: 3 + (i * 0.37) % 4,
}))

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Typing effect
  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex]
    const speed = isDeleting ? 40 : charIndex === current.length ? 2000 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        } else {
          setCharIndex((c) => c + 1)
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setStringIndex((i) => (i + 1) % TYPING_STRINGS.length)
          setCharIndex(0)
        } else {
          setCharIndex((c) => c - 1)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, stringIndex])

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={`${styles.hero} grid-bg`} aria-label="Apresentação">
      {/* Corner decorations */}
      <div className={styles.cornerTL} aria-hidden="true" />
      <div className={styles.cornerBR} aria-hidden="true" />

      {/* Floating particles */}
      <div className={styles.particles} aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }} />
        ))}
      </div>

      <div className={`${styles.content} container`}>
        {/* Status pill */}
        <div className={styles.statusPill}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span>Disponível para projetos freelance</span>
        </div>

        {/* HUD label */}
        <div className={styles.hudLabel} aria-hidden="true">
          <Terminal size={12} />
          <span>SYS://PORTFOLIO_v2.0.26</span>
        </div>

        {/* Main heading */}
        <h1 className={styles.heading}>
          <span className={styles.greeting}>Olá, eu sou</span>
          <GlitchText
            text="João V. B. Rodrigues"
            className={styles.name}
            as="span"
          />
        </h1>

        {/* Typing subtitle */}
        <div className={styles.subtitle}>
          <span className={styles.typingPrefix}>&gt;_ </span>
          <span className={styles.typingText}>{typedText}</span>
          <span
            className={styles.cursor}
            style={{ opacity: cursorVisible ? 1 : 0 }}
            aria-hidden="true"
          >
            |
          </span>
        </div>

        {/* Description */}
        <p className={styles.description}>
          Desenvolvedor full-stack com{' '}
          <span className={styles.highlight}>2+ anos de experiência</span> em WordPress,
          PHP e Laravel. Construo desde portais de notícias até plataformas sociais
          escaláveis — com performance e qualidade de código que fazem a diferença.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctas}>
          <a href="#projects" className={`btn btn-primary ${styles.ctaPrimary}`}>
            <span>Ver Projetos</span>
          </a>
          <a href="#contact" className={`btn btn-outline ${styles.ctaSecondary}`}>
            Entrar em Contato
          </a>
        </div>

        {/* Social links */}
        <div className={styles.socials}>
          <a
            href="https://github.com/JoaoVBRodrigues"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub de João V. B. Rodrigues"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-rodrigues-a94417255/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn de João V. B. Rodrigues"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:joaovictor.brodr@gmail.com"
            className={styles.socialLink}
            aria-label="Email de contato"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats} aria-label="Estatísticas">
          <div className={styles.stat}>
            <span className={styles.statValue}>2+</span>
            <span className={styles.statLabel}>Anos de Exp.</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statValue}>4+</span>
            <span className={styles.statLabel}>Projetos GitHub</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statValue}>5</span>
            <span className={styles.statLabel}>Tecnologias</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className={styles.scrollIndicator}
        onClick={scrollToAbout}
        aria-label="Scroll para a próxima seção"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
