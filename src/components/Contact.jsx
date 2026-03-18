import React, { useState } from 'react'
import { CONTACT } from '../data'
import { useScrollReveal } from '../hooks'
import styles from './Contact.module.css'

const SUBJECTS = [
  'Hire Me / Job Opportunity',
  'Grant Application / Collaboration',
  'Community Building',
  'Crypto Education Partnership',
  'Web3 Product Development',
  'Speaking Engagement',
  'Other',
]

const LINKS = [
  { icon: '💬', label: 'WhatsApp (Fastest)', value: CONTACT.whatsappDisplay, href: CONTACT.whatsapp, external: true },
  { icon: '✉️', label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, external: false },
  { icon: '🐦', label: 'X / Twitter', value: CONTACT.twitterHandle, href: CONTACT.twitter, external: true },
  { icon: '💻', label: 'GitHub', value: CONTACT.githubDisplay, href: CONTACT.github, external: true },
]

export default function Contact() {
  const sectionRef = useScrollReveal()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(CONTACT.formspree, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Server error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>

          {/* Left: Info + Links */}
          <div className="reveal">
            <div className={styles.label}>Let's Connect</div>
            <h2 className={styles.title}>
              Ready to Build<br />
              <span className="orange-text">Something Great?</span>
            </h2>
            <p className={styles.sub}>
              Open for Web3 roles, grant collaborations, community partnerships, and speaking
              engagements. One message away.
            </p>
            <div className={styles.links}>
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={styles.link}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                >
                  <div className={styles.linkIcon}>{l.icon}</div>
                  <div>
                    <div className={styles.linkLabel}>{l.label}</div>
                    <div className={styles.linkVal}>{l.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <div className={styles.formBox}>
              <div className={styles.formTitle}>Send a Message ⚡</div>

              {status === 'success' ? (
                <div className={styles.successMsg}>
                  ✓ Message received! I'll respond within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.fg}>
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.fg}>
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.fg}>
                    <label>Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a topic…</option>
                      {SUBJECTS.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.fg}>
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project, opportunity, or question…"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'SENDING…' : 'SEND MESSAGE ↗'}
                  </button>
                  {status === 'error' && (
                    <div className={styles.errorMsg}>
                      ✗ Something went wrong. Try WhatsApp or email directly.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
