'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './GlitchText.module.css'

interface GlitchTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
  enableGlitch?: boolean
}

export default function GlitchText({
  text,
  className = '',
  as: Tag = 'span',
  enableGlitch = true,
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!enableGlitch) return

    const scheduleGlitch = () => {
      const delay = Math.random() * 5000 + 3000
      timeoutRef.current = setTimeout(() => {
        setIsGlitching(true)
        setTimeout(() => {
          setIsGlitching(false)
          scheduleGlitch()
        }, 400)
      }, delay)
    }

    scheduleGlitch()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [enableGlitch])

  return (
    <Tag
      className={`${styles.glitch} ${isGlitching ? styles.active : ''} ${className}`}
      data-text={text}
    >
      {text}
    </Tag>
  )
}
