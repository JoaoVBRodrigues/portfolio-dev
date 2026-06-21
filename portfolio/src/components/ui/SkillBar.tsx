'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './SkillBar.module.css'

interface SkillBarProps {
  name: string
  level: number
  category: string
  delay?: number
}

export default function SkillBar({ name, level, category, delay = 0 }: SkillBarProps) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  const getColor = (level: number) => {
    if (level >= 90) return 'var(--accent-cyan)'
    if (level >= 80) return 'var(--accent-purple)'
    if (level >= 70) return 'var(--accent-green)'
    return 'var(--accent-orange)'
  }

  return (
    <div ref={ref} className={styles.skillBar}>
      <div className={styles.skillHeader}>
        <div className={styles.skillInfo}>
          <span className={styles.skillName}>{name}</span>
          <span className={styles.skillCategory}>{category}</span>
        </div>
        <span className={styles.skillLevel} style={{ color: getColor(level) }}>
          {animated ? level : 0}%
        </span>
      </div>
      <div className={styles.track}>
        <div className={styles.trackBg} />
        <div
          className={styles.fill}
          style={{
            width: animated ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${getColor(level)}, ${getColor(level)}88)`,
            boxShadow: `0 0 10px ${getColor(level)}66`,
          }}
        />
        <div
          className={styles.glowDot}
          style={{
            left: animated ? `${level}%` : '0%',
            background: getColor(level),
            boxShadow: `0 0 8px ${getColor(level)}, 0 0 16px ${getColor(level)}88`,
          }}
        />
      </div>
    </div>
  )
}
