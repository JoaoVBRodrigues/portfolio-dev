'use client'

import styles from './About.module.css'
import SkillBar from '@/components/ui/SkillBar'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { skills } from '@/data/services'
import { Briefcase, Code2, Zap } from 'lucide-react'

const timeline = [
  {
    year: '2023 – 2025',
    role: 'Desenvolvedor Full-Stack',
    company: 'Next Tecnologia',
    description:
      'Sustentação e desenvolvimento de sites WordPress de alta performance, temas customizados com Laravel + React/Next.js, otimização de ambientes WordPress (Elementor, Divi Theme) e desenvolvimento de funcionalidades para clientes corporativos.',
    tags: ['WordPress', 'Laravel', 'React', 'Next.js', 'PHP', 'Elementor', 'Divi'],
    accentColor: 'var(--accent-cyan)',
  },
  {
    year: '2022 – Presente',
    role: 'Desenvolvedor Freelancer',
    company: 'Autônomo',
    description:
      'Desenvolvimento de projetos independentes: plataformas sociais, portais de notícias e aplicações Laravel. Engenharia de prompts de IA e sistemas de galeria em PHP.',
    tags: ['PHP', 'Laravel', 'Blade', 'Docker', 'MySQL'],
    accentColor: 'var(--accent-purple)',
  },
]

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`} aria-labelledby="about-title">
      <div className="container">
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <p className="section-label">{'// SOBRE MIM'}</p>
          <h2 id="about-title" className={`section-title ${styles.title}`}>
            Dev que entrega,{' '}
            <span className="text-gradient-cyan">não só promete</span>
          </h2>
          <p className="section-subtitle">
            Comecei minha jornada no desenvolvimento web e rapidamente descobri
            que a melhor parte não é só escrever código — é ver soluções reais funcionando
            em produção para clientes reais.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Bio + Stats */}
          <div className={styles.bioCol}>
            <div className={styles.bioCard}>
              {/* Player card HUD style */}
              <div className={styles.playerCard}>
                <div className={styles.playerAvatar} aria-hidden="true">
                  <span className={styles.avatarInitials}>JVB</span>
                  <div className={styles.avatarGlow} />
                </div>
                <div className={styles.playerInfo}>
                  <p className={styles.playerTag}>{'// PLAYER PROFILE'}</p>
                  <h3 className={styles.playerName}>João V. B. Rodrigues</h3>
                  <p className={styles.playerRole}>Full-Stack Developer</p>
                  <div className={styles.playerLevel}>
                    <span className={styles.levelLabel}>LVL</span>
                    <span className={styles.levelValue}>27</span>
                  </div>
                </div>
              </div>

              {/* XP Stats */}
              <div className={styles.statsGrid} aria-label="Estatísticas de experiência">
                <div className={styles.statItem}>
                  <Briefcase size={18} className={styles.statIcon} aria-hidden="true" />
                  <AnimatedCounter target={2} suffix="+" className={styles.statNum} />
                  <span className={styles.statLabel}>Anos de Exp.</span>
                </div>
                <div className={styles.statItem}>
                  <Code2 size={18} className={styles.statIcon} aria-hidden="true" />
                  <AnimatedCounter target={4} suffix="+" className={styles.statNum} />
                  <span className={styles.statLabel}>Projetos</span>
                </div>
                <div className={styles.statItem}>
                  <Zap size={18} className={styles.statIcon} aria-hidden="true" />
                  <AnimatedCounter target={5} className={styles.statNum} />
                  <span className={styles.statLabel}>Tecnologias</span>
                </div>
              </div>

              {/* Bio text */}
              <div className={styles.bioText}>
                <p>
                  Sou apaixonado por criar experiências web que combinam{' '}
                  <strong>performance real</strong> com código limpo e manutenível.
                  Trabalho principalmente no ecossistema PHP/Laravel e no mundo React/Next.js,
                  com foco especial em WordPress de alta qualidade.
                </p>
                <p>
                  Na Next Tecnologia, aprendi que sustentação não é só corrigir bugs —
                  é evoluir sistemas existentes com cuidado e precisão.
                </p>
              </div>

              {/* Social proof links */}
              <div className={styles.profileLinks}>
                <a
                  href="https://github.com/JoaoVBRodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileLink}
                >
                  <span className={styles.profileLinkDot} />
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-rodrigues-a94417255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileLink}
                >
                  <span className={styles.profileLinkDot} />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right: Skills + Timeline */}
          <div className={styles.rightCol}>
            {/* Skills */}
            <div className={styles.skillsCard}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardTitleAccent}>{'>'}_</span> Stack de Habilidades
              </h3>
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    category={skill.category}
                    delay={index * 80}
                  />
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className={styles.timelineCard}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardTitleAccent}>{'>'}_</span> Experiência Profissional
              </h3>
              <div className={styles.timeline}>
                {timeline.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div
                      className={styles.timelineLine}
                      style={{ borderColor: item.accentColor, background: item.accentColor }}
                    />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeader}>
                        <div>
                          <p className={styles.timelineYear}>{item.year}</p>
                          <p className={styles.timelineRole}>{item.role}</p>
                          <p className={styles.timelineCompany}>{item.company}</p>
                        </div>
                      </div>
                      <p className={styles.timelineDesc}>{item.description}</p>
                      <div className={styles.timelineTags}>
                        {item.tags.map((tag) => (
                          <span key={tag} className="tag tag-cyan">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
