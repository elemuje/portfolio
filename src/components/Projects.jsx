import React from 'react'
import { PROJECTS } from '../data'
import { useScrollReveal } from '../hooks'
import styles from './Projects.module.css'

function ProjectCard({ emoji, title, desc, tags, url, bg }) {
  return (
    <div className={`${styles.card} reveal`}>
      <div className={styles.thumb} style={{ background: bg }}>
        <div className={styles.thumbGrid} />
        <div className={styles.thumbGlow} />
        <span className={styles.emoji}>{emoji}</span>
        <div className={styles.overlay}>
          <a href={url} target="_blank" rel="noopener noreferrer" className={styles.previewBtn}>
            ↗ LIVE PREVIEW
          </a>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.tags}>
          {tags.map((t) => (
            <span key={t.label} className={`${styles.tag} ${t.orange ? styles.tagOrange : styles.tagWhite}`}>
              {t.label}
            </span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
          View Live →
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useScrollReveal()
  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">
            Projects That <span className="orange-text">Ship</span>
          </h2>
          <p className="section-sub">
            Live, deployed Web3 products — from DeFi protocols to community platforms.
          </p>
        </div>
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
