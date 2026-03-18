import React from 'react'
import { PROTOCOLS } from '../data'
import { useScrollReveal } from '../hooks'
import styles from './Protocols.module.css'

export default function Protocols() {
  const sectionRef = useScrollReveal()
  return (
    <section id="protocols" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={`${styles.label} reveal`}>Protocols &amp; Platforms I've Worked With</div>
        <div className={`${styles.row} reveal`}>
          {PROTOCOLS.map((p) => (
            <div key={p.name} className={styles.badge}>
              <span className={styles.icon}>{p.icon}</span>
              <span className={styles.name}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
