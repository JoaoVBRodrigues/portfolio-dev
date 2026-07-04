'use client'

import styles from './Services.module.css'
import { services } from '@/data/services'
import { Globe, Database, Monitor, Zap, CheckCircle } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  wordpress: <Globe size={28} aria-hidden="true" />,
  laravel: <Database size={28} aria-hidden="true" />,
  react: <Monitor size={28} aria-hidden="true" />,
  performance: <Zap size={28} aria-hidden="true" />,
}

const accentMap = {
  cyan: { border: 'var(--border-cyan)', glow: 'var(--glow-cyan)', color: 'var(--accent-cyan)', dim: 'var(--accent-cyan-dim)' },
  purple: { border: 'var(--border-purple)', glow: 'var(--glow-purple)', color: 'var(--accent-purple)', dim: 'var(--accent-purple-dim)' },
  green: { border: 'rgba(57, 255, 20, 0.3)', glow: 'var(--glow-green)', color: 'var(--accent-green)', dim: 'var(--accent-green-dim)' },
  orange: { border: 'rgba(255, 107, 53, 0.3)', glow: '0 0 20px rgba(255,107,53,0.3)', color: 'var(--accent-orange)', dim: 'var(--accent-orange-dim)' },
}

export default function Services() {
  return (
    <section
      id="services"
      className={`${styles.services} section`}
      aria-labelledby="services-title"
    >
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">{'// SERVIÇOS'}</p>
          <h2 id="services-title" className="section-title">
            O que eu{' '}
            <span className="text-gradient-purple">construo para você</span>
          </h2>
          <p className="section-subtitle">
            Soluções full-stack com foco em qualidade, performance e entrega real.
            Cada projeto é tratado como produto — não como tarefa.
          </p>
        </div>

        {/* Services grid */}
        <div className={styles.grid}>
          {services.map((service) => {
            const accent = accentMap[service.accentColor]
            return (
              <article
                key={service.id}
                className={styles.card}
                style={{
                  '--card-border': accent.border,
                  '--card-glow': accent.glow,
                  '--card-color': accent.color,
                  '--card-dim': accent.dim,
                } as React.CSSProperties}
              >
                {/* Top accent line */}
                <div
                  className={styles.cardTopLine}
                  style={{ background: accent.color }}
                />

                {/* Icon */}
                <div
                  className={styles.iconWrap}
                  style={{ color: accent.color, background: accent.dim, border: `1px solid ${accent.border}` }}
                >
                  {iconMap[service.icon]}
                </div>

                {/* Title */}
                <h3 className={styles.cardTitle}>{service.title}</h3>

                {/* Description */}
                <p className={styles.cardDesc}>{service.description}</p>

                {/* Features */}
                <ul className={styles.features} aria-label={`Funcionalidades: ${service.title}`}>
                  {service.features.map((feat) => (
                    <li key={feat} className={styles.feature}>
                      <CheckCircle
                        size={14}
                        style={{ color: accent.color }}
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className={styles.stack}>
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={styles.techTag}
                      style={{
                        color: accent.color,
                        background: accent.dim,
                        border: `1px solid ${accent.border}`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaBannerContent}>
            <h3 className={styles.ctaBannerTitle}>
              Tem um projeto em mente?
            </h3>
            <p className={styles.ctaBannerDesc}>
              Vamos conversar sobre o que você precisa e como posso ajudar.
            </p>
          </div>
          <a href="#contact" className={`btn btn-primary ${styles.ctaBannerBtn}`}>
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </div>
    </section>
  )
}
