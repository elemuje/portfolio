import React from 'react'
import { CONTACT } from '../data'
import styles from './CTAStrip.module.css'

export default function CTAStrip() {
  return (
    <div className={styles.strip}>
      <div className="container">
        <h2>Let's Build Web3 Africa Together.</h2>
        <p>Open for roles, grants, partnerships &amp; speaking engagements. The mission is 1M onboarded.</p>
        <div className={styles.actions}>
          <a href={`mailto:${CONTACT.email}`} className={styles.btnBlack}>✉️ Email Me</a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
