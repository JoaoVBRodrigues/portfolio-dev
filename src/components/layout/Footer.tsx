import styles from './Footer.module.css'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} aria-label="Rodapé">
      <div className={`${styles.inner} container`}>
        {/* Logo + Nav */}
        <div className={styles.topRow}>
          <a href="#" className={styles.logo} aria-label="Voltar ao topo">
            <span className={styles.logoText}>JVB</span>
            <span className={styles.logoDot}>.dev</span>
          </a>

          <nav aria-label="Links do rodapé">
            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.socials}>
            <a
              href="https://github.com/JoaoVBRodrigues"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
          <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-rodrigues-a94417255/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
          <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:joaovictor.brodr@gmail.com"
              className={styles.socialIcon}
              aria-label="Email"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Bottom row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {year} João V. B. Rodrigues — Todos os direitos reservados.
          </p>
          <p className={styles.built}>
            Built with{' '}
            <span className={styles.builtHighlight}>Next.js 15</span> &{' '}
            <span className={styles.builtHighlight}>TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
