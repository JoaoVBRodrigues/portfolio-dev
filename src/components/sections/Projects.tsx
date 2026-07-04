'use client'

import { useState } from 'react'
import styles from './Projects.module.css'
import { projects } from '@/data/projects'
import { Code2 } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcons'

const tagColorMap = {
  cyan: styles.tagCyan,
  purple: styles.tagPurple,
  green: styles.tagGreen,
  orange: styles.tagOrange,
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className={`${styles.projects} section grid-bg`}
      aria-labelledby="projects-title"
    >
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">{'// PROJETOS'}</p>
          <h2 id="projects-title" className="section-title">
            Código que fala{' '}
            <span className="text-gradient-cyan">por si mesmo</span>
          </h2>
          <p className="section-subtitle">
            Projetos reais do meu GitHub — do backend robusto ao frontend refinado.
            Cada repositório é um problema resolvido.
          </p>
        </div>

        {/* Featured projects */}
        <div className={styles.featuredGrid}>
          {featured.map((project) => (
            <article
              key={project.id}
              className={`${styles.featuredCard} ${hoveredId === project.id ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* HUD header */}
              <div className={styles.cardHeader}>
                <div className={styles.cardHeaderLeft}>
                  <Code2 size={16} aria-hidden="true" />
                  <span className={styles.cardId}>#{project.id.toUpperCase()}</span>
                </div>
                <div className={styles.cardHeaderRight}>
                  <span className={styles.yearBadge}>{project.year}</span>
                </div>
              </div>

              {/* Language dot */}
              <div className={styles.langBadge}>
                <span
                  className={styles.langDot}
                  style={{ background: project.languageColor, boxShadow: `0 0 6px ${project.languageColor}` }}
                  aria-hidden="true"
                />
                <span>{project.language}</span>
              </div>

              {/* Title */}
              <h3 className={styles.cardTitle}>{project.title}</h3>

              {/* Description */}
              <p className={styles.cardDesc}>{project.longDescription}</p>

              {/* Metrics */}
              <div className={styles.metrics} aria-label="Métricas do projeto">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className={styles.metric}>
                    <span className={styles.metricLabel}>{metric.label}</span>
                    <span className={styles.metricValue}>{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${styles.tag} ${tagColorMap[project.tagColor]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className={styles.links}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                  aria-label={`Ver ${project.title} no GitHub`}
                >
                  <GithubIcon size={18} />
                  <span>Ver no GitHub</span>
                </a>
              </div>

              {/* Decorative corner */}
              <div className={styles.cardCorner} aria-hidden="true" />
            </article>
          ))}
        </div>

        {/* Other projects */}
        <div className={styles.otherSection}>
          <h3 className={styles.otherTitle}>
            <span className={styles.otherTitleAccent}>&gt;_</span> Outros Projetos
          </h3>
          <div className={styles.otherGrid}>
            {other.map((project) => (
              <article key={project.id} className={styles.otherCard}>
                <div className={styles.otherCardHeader}>
                  <div className={styles.langBadge}>
                    <span
                      className={styles.langDot}
                      style={{ background: project.languageColor }}
                      aria-hidden="true"
                    />
                    <span>{project.language}</span>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                    aria-label={`GitHub: ${project.title}`}
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
                <h4 className={styles.otherTitle2}>{project.title}</h4>
                <p className={styles.otherDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`${styles.tag} ${tagColorMap[project.tagColor]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* GitHub link */}
        <div className={styles.githubCta}>
          <a
            href="https://github.com/JoaoVBRodrigues"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline ${styles.githubBtn}`}
          >
            <GithubIcon size={18} />
            Ver todos os repositórios no GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
