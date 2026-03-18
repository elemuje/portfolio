import React, { useState } from 'react'
import { FAQ as faqData, CONTACT } from '../data'
import { useScrollReveal } from '../hooks'
import styles from './FAQ.module.css'

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={styles.item}>
      <button
        className={`${styles.question} ${open ? styles.open : ''}`}
        onClick={onToggle}
      >
        {q}
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▼</span>
      </button>
      <div className={`${styles.answer} ${open ? styles.answerOpen : ''}`}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  const sectionRef = useScrollReveal()

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section id="faq" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.layout}>
          <div className="reveal">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">
              Common <span className="orange-text">Questions</span>
            </h2>
            <p className="section-sub">
              Everything you need to know before reaching out — answered upfront.
            </p>
            <div style={{ marginTop: 32 }}>
              <a href={`mailto:${CONTACT.email}`} className="btn-ghost-sm">
                ✉️ Ask a Question
              </a>
            </div>
          </div>

          <div className={`${styles.list} reveal`}>
            {faqData.map((f, i) => (
              <FaqItem
                key={i}
                q={f.q}
                a={f.a}
                open={openIdx === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
