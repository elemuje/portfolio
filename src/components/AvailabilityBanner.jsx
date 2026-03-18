import React from 'react'
import { PERSONAL } from '../data'
import styles from './AvailabilityBanner.module.css'

export default function AvailabilityBanner() {
  if (!PERSONAL.available) return null
  return (
    <div className={styles.banner}>
      {PERSONAL.availableText}
      <a href="#contact"> Get in Touch →</a>
    </div>
  )
}
