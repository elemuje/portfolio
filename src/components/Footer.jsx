import React from 'react'
import { CONTACT, PERSONAL } from '../data'
import styles from './Footer.module.css'

const NAV_LINKS = ['#about', '#services', '#projects', '#experience', '#testimonials', '#faq']
const NAV_LABELS = ['About', 'Services', 'Projects', 'Experience', 'Testimonials', 'FAQ']

const SERVICE_LINKS = [
  { href: '#services', label: 'Crypto Education' },
  { href: '#services', label: 'Community Building' },
  { href: '#services', label: 'Web3 Development' },
  { href: '#services', label: 'Airdrop Strategy' },
]

const SOCIALS = [
  { href: CONTACT.github, label: '🐙', title: 'GitHub' },
  { href: CONTACT.twitter, label: '🐦', title: 'Twitter' },
  { href: CONTACT.whatsapp, label: '💬', title: 'WhatsApp' },
  { href: `mailto:${CONTACT.email}`, label: '✉️', title: 'Email' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>

          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              Mujeeb<span className={styles.dot}>.</span>dev
            </a>
            <p>
              Web3 Community Builder, Crypto Educator &amp; Vibe Code Developer based in Nigeria.
              On a mission to onboard 1,000,000 people into crypto.
            </p>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  className={styles.social}
                  title={s.title}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className={styles.col}>
            <h4>Navigate</h4>
            <ul>
              {NAV_LINKS.map((href, i) => (
                <li key={href}><a href={href}>{NAV_LABELS[i]}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4>Services</h4>
            <ul>
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer">{CONTACT.twitterHandle}</a></li>
              <li><a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <a href="#" className={styles.logo}>
            Mujeeb<span className={styles.dot}>.</span>dev
          </a>
          <div className={styles.copy}>
            © 2025 {PERSONAL.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
