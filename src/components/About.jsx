import React, { useState } from 'react'
import { PERSONAL, ABOUT_TAGS, SKILLS } from '../data'
import { useScrollReveal, useCountUp, useSkillBars } from '../hooks'
import styles from './About.module.css'

function MiniStat({ value, prefix = '', suffix = '' }) {
  const ref = useCountUp(value, { prefix, suffix })
  return <span ref={ref} className={styles.msNum}>{prefix}0{suffix}</span>
}

export default function About() {
  const sectionRef = useScrollReveal()
  const skillRef = useSkillBars()
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>

          {/* Profile Card */}
          <div className={`${styles.cardWrap} reveal`}>
            <div className={styles.cornerTL} />
            <div className={styles.cornerTR} />
            <div className={styles.cornerBL} />
            <div className={styles.cornerBR} />
            <div className={styles.card}>
              <div className={styles.avatar}>
                {imgError ? (
                  <span>MA</span>
                ) : (
                  <img
                    src={PERSONAL.avatar}
                    alt={PERSONAL.name}
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
              <div className={styles.name}>{PERSONAL.name}</div>
              <div className={styles.role}>{PERSONAL.title}</div>
              <div className={styles.tags}>
                {ABOUT_TAGS.map((t) => (
                  <span key={t.label} className={`${styles.tag} ${t.dim ? styles.dim : ''}`}>
                    {t.label}
                  </span>
                ))}
              </div>
              <div className={styles.divider} />
              <div className={styles.miniStats}>
                <div className={styles.msItem}>
                  <MiniStat value={5000} suffix="+" />
                  <span className={styles.msLbl}>Trained</span>
                </div>
                <div className={styles.msItem}>
                  <MiniStat value={2} prefix="$" suffix="M+" />
                  <span className={styles.msLbl}>Volume</span>
                </div>
                <div className={styles.msItem}>
                  <MiniStat value={5} suffix="+" />
                  <span className={styles.msLbl}>Products</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text + Skills */}
          <div className={`${styles.text} reveal`}>
            <span className="section-tag">About Me</span>
            <h2 className="section-title">
              Bridging Crypto Knowledge with{' '}
              <span className="orange-text">Real Impact</span>
            </h2>
            {PERSONAL.bio.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}

            {/* Skill Bars */}
            <div className={styles.skills} ref={skillRef}>
              {SKILLS.map((s) => (
                <div key={s.name} className={styles.skillBar}>
                  <div className={styles.skillTop}>
                    <span className={styles.skillName}>▸ {s.name}</span>
                    <span className={styles.skillPct}>{s.pct}%</span>
                  </div>
                  <div className={styles.skillTrack}>
                    <div className={`${styles.skillFill} skill-fill`} data-w={s.pct} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
