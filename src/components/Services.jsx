import React from 'react'
import { SERVICES } from '../data'
import { useScrollReveal } from '../hooks'
import styles from './Services.module.css'

export default function Services() {
  const sectionRef = useScrollReveal()
  return (
    <section id="services" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal`} style={{ textAlign: 'center' }}>
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">
            Services Built for the <span className="orange-text">Web3 Era</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            From education to engineering — end-to-end value across the crypto ecosystem.
          </p>
        </div>
        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.num} className={`${styles.card} reveal`}>
              <div className={styles.num}>{s.num}</div>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className={styles.arrow}>↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
