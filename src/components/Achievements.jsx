import React from 'react'
import { ACHIEVEMENTS } from '../data'
import { useCountUp, useScrollReveal } from '../hooks'
import styles from './Achievements.module.css'

function AchItem({ value, prefix = '', suffix = '', label }) {
  const numRef = useCountUp(value, { prefix, suffix })
  return (
    <div className={styles.item}>
      <span ref={numRef} className={styles.num}>{prefix}0{suffix}</span>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default function Achievements() {
  const sectionRef = useScrollReveal()
  return (
    <section id="achievements" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={`${styles.outer} reveal`}>
          <div className={styles.grid}>
            {ACHIEVEMENTS.map((a) => (
              <AchItem key={a.label} {...a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
