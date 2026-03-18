import React from 'react'
import { TESTIMONIALS } from '../data'
import { useScrollReveal } from '../hooks'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const sectionRef = useScrollReveal()
  return (
    <section id="testimonials" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center' }}>
          <span className="section-tag">Social Proof</span>
          <h2 className="section-title">
            What the <span className="orange-text">Community Says</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Trusted by builders, learners, and protocols across Africa and beyond.
          </p>
        </div>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={`${styles.card} reveal`}>
              <div className={styles.stars}>★★★★★</div>
              <div className={styles.quote}>"</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.handle}>{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
