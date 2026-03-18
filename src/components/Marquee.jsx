import React from 'react'
import styles from './Marquee.module.css'

const ITEMS = [
  'Crypto Education', 'Community Building', 'DeFi Protocols', 'Airdrop Strategy',
  'Web3 Development', 'Al-Halal Academy', 'Across DEX Ranger', 'Blockchain Onboarding',
  'Vibe Code Dev', '1M Mission',
]

export default function Marquee() {
  // Duplicate for seamless loop
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
