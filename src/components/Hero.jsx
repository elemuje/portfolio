import React from 'react'
import { PERSONAL, STATS, CONTACT } from '../data'
import { useCountUp } from '../hooks'
import styles from './Hero.module.css'

function StatCell({ value, prefix = '', suffix = '', label }) {
  const ref = useCountUp(value, { prefix, suffix })
  return (
    <div className={styles.statCell}>
      <span ref={ref} className={styles.statNum}>
        {prefix}0{suffix}
      </span>
      <span className={styles.statLbl}>{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background */}
      <div className={styles.bg}>
        <div className={styles.gridLines} />
        <div className={styles.glow} />
        <div className={styles.glow2} />
        <div className={styles.btcWatermark}>₿</div>
      </div>

      <div className="container">
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.blink} />
            Open to Web3 Roles &amp; Dev Grants
          </div>

          {/* Title */}
          <h1 className={styles.title}>
            Web3 Builder.<br />
            Crypto Educator.<br />
            <span className={styles.accent}>Vibe Code Dev.</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.sub}>
            <strong>Adebimpe Mujeeb Adegoke</strong> — Founder of Al-Halal Crypto Academy.<br />
            Trained <strong>5,000+ youths</strong> in blockchain &amp; DeFi. Generated{' '}
            <strong>$2M+</strong> on Across DEX.<br />
            On a mission to onboard <strong>1,000,000 people</strong> into crypto across Africa.
          </p>

          {/* CTAs */}
          <div className={styles.actions}>
            <a href="#contact" className="btn-orange">⚡ Hire Me</a>
            <a href="#projects" className="btn-outline">🔭 View Projects</a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              💬 WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className={styles.statsRow}>
            {STATS.map((s) => (
              <StatCell key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
