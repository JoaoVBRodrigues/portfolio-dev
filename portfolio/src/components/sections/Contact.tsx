'use client'

import { useState, FormEvent } from 'react'
import styles from './Contact.module.css'
import { Mail, Send, MapPin, Clock } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Transmitindo mensagem...' })

    // Simulate async submission (mailto fallback)
    await new Promise((r) => setTimeout(r, 1200))

    // Build mailto link as fallback
    const subject = encodeURIComponent(form.subject || 'Contato via portfólio')
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:joaovictor.brodr@gmail.com?subject=${subject}&body=${body}`

    setStatus({ type: 'success', message: 'Mensagem transmitida com sucesso! Entrarei em contato em breve.' })
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section
      id="contact"
      className={`${styles.contact} section`}
      aria-labelledby="contact-title"
    >
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">{'// CONTATO'}</p>
          <h2 id="contact-title" className="section-title">
            Vamos{' '}
            <span className="text-gradient-purple">trabalhar juntos</span>
          </h2>
          <p className="section-subtitle">
            Tem um projeto, uma ideia ou uma pergunta? Me manda uma mensagem.
            Respondo em até 24 horas.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Info */}
          <div className={styles.infoCol}>
            {/* Contact cards */}
            <div className={styles.contactCards}>
              <a
                href="mailto:joaovictor.brodr@gmail.com"
                className={styles.contactCard}
                aria-label="Enviar email"
              >
                <div className={styles.contactCardIcon} style={{ color: 'var(--accent-cyan)', background: 'var(--accent-cyan-dim)', border: '1px solid var(--border-cyan)' }}>
                  <Mail size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className={styles.contactCardLabel}>Email</p>
                  <p className={styles.contactCardValue}>joaovictor.brodr@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-rodrigues-a94417255/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
                aria-label="LinkedIn"
              >
                <div className={styles.contactCardIcon} style={{ color: 'var(--accent-purple)', background: 'var(--accent-purple-dim)', border: '1px solid var(--border-purple)' }}>
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <p className={styles.contactCardLabel}>LinkedIn</p>
                  <p className={styles.contactCardValue}>João Rodrigues</p>
                </div>
              </a>

              <a
                href="https://github.com/JoaoVBRodrigues"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
                aria-label="GitHub"
              >
                <div className={styles.contactCardIcon} style={{ color: 'var(--accent-green)', background: 'var(--accent-green-dim)', border: '1px solid rgba(57,255,20,0.3)' }}>
                  <GithubIcon size={22} />
                </div>
                <div>
                  <p className={styles.contactCardLabel}>GitHub</p>
                  <p className={styles.contactCardValue}>@JoaoVBRodrigues</p>
                </div>
              </a>
            </div>

            {/* Info tags */}
            <div className={styles.infoTags}>
              <div className={styles.infoTag}>
                <MapPin size={14} aria-hidden="true" />
                <span>Brasil — Disponível Remotamente</span>
              </div>
              <div className={styles.infoTag}>
                <Clock size={14} aria-hidden="true" />
                <span>Resposta em até 24h</span>
              </div>
            </div>

            {/* Terminal decoration */}
            <div className={styles.terminalCard} aria-hidden="true">
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDot} style={{ background: '#ff5f57' }} />
                <div className={styles.terminalDot} style={{ background: '#ffbd2e' }} />
                <div className={styles.terminalDot} style={{ background: '#28ca41' }} />
                <span className={styles.terminalTitle}>contato.sh</span>
              </div>
              <div className={styles.terminalBody}>
                <p><span className={styles.terminalCyan}>$</span> ./send_message.sh</p>
                <p><span className={styles.terminalGreen}>✓</span> Iniciando conexão segura...</p>
                <p><span className={styles.terminalGreen}>✓</span> Disponível para freelance</p>
                <p><span className={styles.terminalGreen}>✓</span> Projetos WordPress / Laravel / React</p>
                <p><span className={styles.terminalCyan}>_</span> aguardando input...</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formCol}>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              aria-label="Formulário de contato"
            >
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Nome *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className={styles.input}
                    autoComplete="name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className={styles.input}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-subject" className={styles.label}>
                  Assunto *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Projeto WordPress, desenvolvimento Laravel, etc."
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>
                  Mensagem *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Descreva seu projeto ou necessidade..."
                  className={`${styles.input} ${styles.textarea}`}
                />
              </div>

              {status.type !== 'idle' && (
                <div
                  className={`${styles.statusMsg} ${styles[status.type]}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status.type === 'loading'}
                aria-busy={status.type === 'loading'}
              >
                <Send size={16} aria-hidden="true" />
                <span>{status.type === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
