import React from 'react'
import { EXPERIENCE, CONTACT } from '../data'
import { useScrollReveal } from '../hooks'
import styles from './Experience.module.css'

export default function Experience() {
  const sectionRef = useScrollReveal()
  return (
    <section id="experience" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.layout}>
          <div className="reveal">
            <span className="section-tag">Career</span>
            <h2 className="section-title">
              Experience &amp; <span className="orange-text">Milestones</span>
            </h2>
            <p className="section-sub">
              A track record forged at the frontier of Web3 — from community floors to protocol
              dashboards.
            </p>
            <div style={{ marginTop: 32 }}>
              <a href={`mailto:${CONTACT.email}`} className="btn-ghost-sm">
                📄 Request Full CV
              </a>
            </div>
          </div>

          <div className={`${styles.timeline} reveal`}>
            <div className={styles.line} />
            {EXPERIENCE.map((e) => (
              <div key={e.org} className={styles.item}>
                <div className={styles.dot} />
                <div className={styles.date}>{e.date}</div>
                <div className={styles.org}>{e.org}</div>
                <div className={styles.role}>{e.role}</div>
                <div className={styles.desc}>{e.desc}</div>
                <div className={styles.tags}>
                  {e.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
