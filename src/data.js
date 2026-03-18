// ── PORTFOLIO DATA ──
// Single source of truth for all content. Edit here to update everywhere.

export const PERSONAL = {
  name: 'Adebimpe Mujeeb Adegoke',
  shortName: 'Mujeeb',
  title: 'Crypto Tutor · Web3 Builder · Vibe Dev',
  taglines: ['Web3 Builder.', 'Crypto Educator.', 'Vibe Code Dev.'],
  accentTagline: 'Vibe Code Dev.',
  bio: [
    `I am <strong>Adebimpe Mujeeb Adegoke</strong> — a results-driven Web3 professional who believes education is the most powerful catalyst for mass blockchain adoption.`,
    `As founder of <strong>Al-Halal Crypto Academy</strong> and a recognized <strong>Across DEX Referral Ranger</strong>, I've empowered <strong>5,000+ youths</strong> across Nigeria to navigate DeFi confidently — from their first airdrop to their first on-chain trade. My mission: <strong>1,000,000 people</strong> onboarded into crypto.`,
    `I build too: live DEX interfaces, DeFi dashboards, and community platforms. <strong>Education meets engineering</strong> — that's my edge.`,
  ],
  avatar: 'https://drive.google.com/thumbnail?id=17lvCXkkOBY3Bx8b7czZT8wOrEtDWBcIF&sz=w200',
  location: 'Nigeria 🇳🇬',
  available: true,
  availableText: '🟢 AVAILABLE FOR HIRE — Web3 Roles, Grants & Partnerships',
}

export const CONTACT = {
  whatsapp: 'https://wa.me/2348143399914',
  whatsappDisplay: '+234 814 339 9914',
  email: 'Elemuje@gmail.com',
  twitter: 'https://x.com/Elemudev',
  twitterHandle: '@Elemudev',
  github: 'https://github.com/elemuje',
  githubDisplay: 'github.com/elemuje',
  formspree: 'https://formspree.io/f/mpqykdpv',
}

export const STATS = [
  { value: 5000, suffix: '+', label: 'Youths Trained' },
  { value: 2, prefix: '$', suffix: 'M+', label: 'DEX Volume' },
  { value: 5, suffix: '+', label: 'Live Products' },
  { value: 5, suffix: 'yr+', label: 'Web3 XP' },
]

export const ACHIEVEMENTS = [
  { value: 5000, suffix: '+', label: 'Youths trained in crypto & digital literacy' },
  { value: 2, prefix: '$', suffix: 'M+', label: 'Trading volume as Across Referral Ranger' },
  { value: 5, suffix: '+', label: 'Live Web3 products built & deployed' },
  { value: 1, suffix: 'M', label: 'People aimed to onboard into crypto' },
]

export const SKILLS = [
  { name: 'Crypto Education & Training', pct: 98 },
  { name: 'Community Building & Growth', pct: 95 },
  { name: 'DeFi & DEX Protocols', pct: 88 },
  { name: 'Frontend Web3 Development', pct: 82 },
  { name: 'Airdrop Strategy & Farming', pct: 92 },
  { name: 'Digital Marketing & Branding', pct: 85 },
]

export const ABOUT_TAGS = [
  { label: 'DeFi', dim: false },
  { label: 'Community', dim: false },
  { label: 'Educator', dim: false },
  { label: 'Open Source', dim: true },
  { label: 'Nigeria 🇳🇬', dim: true },
]

export const PROTOCOLS = [
  { icon: '🌉', name: 'Across Protocol' },
  { icon: '💛', name: 'Bybit' },
  { icon: '🍊', name: 'OrangeX' },
  { icon: '💎', name: 'Protocol Gemini' },
  { icon: '🕌', name: 'Halal DAO' },
  { icon: '🔵', name: 'Base L2' },
  { icon: '🔴', name: 'Optimism' },
]

export const SERVICES = [
  {
    num: '01',
    icon: '🎓',
    title: 'Crypto Education & Training',
    desc: 'Comprehensive Web3 onboarding programs designed to take complete beginners from zero to on-chain in weeks.',
    items: ['DeFi fundamentals & wallet setup', 'Airdrop farming masterclasses', 'Live cohorts & digital bootcamps', 'Youth & institutional programs'],
  },
  {
    num: '02',
    icon: '🌐',
    title: 'Community Building',
    desc: 'Build, grow, and manage high-engagement Web3 communities that convert browsers into believers.',
    items: ['Telegram & Discord management', 'Ambassador & referral programs', 'Engagement campaigns & events', 'Community analytics & reporting'],
  },
  {
    num: '03',
    icon: '⚙️',
    title: 'Web3 Product Development',
    desc: 'Frontend-first DeFi products — clean, fast, and production-ready using modern Web3 tooling.',
    items: ['DEX & DeFi interfaces', 'Landing pages & dashboards', 'Educational Web3 platforms', 'Next.js + Tailwind + Wagmi stack'],
  },
  {
    num: '04',
    icon: '🪂',
    title: 'Airdrop Strategy & Guidance',
    desc: 'Data-driven strategies that turn early protocol participation into meaningful financial rewards.',
    items: ['Protocol eligibility optimization', 'Farming strategy & automation', 'Portfolio diversification advice', 'Group airdrop hunting sessions'],
  },
]

export const PROJECTS = [
  {
    emoji: '🛒',
    title: 'Poy Market',
    desc: 'Decentralized marketplace interface enabling peer-to-peer crypto-native commerce with wallet connect and on-chain settlement flows.',
    tags: [{ label: 'Web3', orange: true }, { label: 'Marketplace', orange: true }, { label: 'Vercel', orange: false }],
    url: 'https://poy-market.vercel.app/',
    bg: '#0a0700',
  },
  {
    emoji: '📊',
    title: 'OP Perp DEX',
    desc: 'Perpetual DEX frontend on Optimism — clean trading interface for leveraged positions with real-time price feeds and order management.',
    tags: [{ label: 'DEX', orange: true }, { label: 'Perps', orange: true }, { label: 'Optimism', orange: false }],
    url: 'https://op-perp.vercel.app/',
    bg: '#000a06',
  },
  {
    emoji: '🔷',
    title: 'V0 Base DEX',
    desc: 'Next-gen DEX interface on Base L2. Optimized for low-latency swaps, liquidity management, and seamless cross-chain UX.',
    tags: [{ label: 'DEX', orange: true }, { label: 'Base L2', orange: true }, { label: 'DeFi', orange: false }],
    url: 'https://v0-basedex.vercel.app/',
    bg: '#04000a',
  },
  {
    emoji: '🌱',
    title: 'RTIFN Osun',
    desc: 'Official web platform for RTIFN Osun — a youth empowerment and digital skills initiative bridging technology and underserved communities.',
    tags: [{ label: 'NGO', orange: true }, { label: 'Community', orange: false }, { label: 'Osun', orange: false }],
    url: 'https://www.rtifnosun.com/',
    bg: '#0a0400',
  },
  {
    emoji: '🪂',
    title: 'Crypto Airdrop Basics',
    desc: 'Interactive beginner guide covering crypto airdrops, trading strategies, and DeFi participation — built to onboard the next wave of Web3 users.',
    tags: [{ label: 'Education', orange: true }, { label: 'Airdrop', orange: true }, { label: 'DeFi', orange: false }],
    url: 'https://v0-basic-of-crypto-airdrop.vercel.app/#trading',
    bg: '#0a0500',
  },
]

export const EXPERIENCE = [
  {
    date: '2022 — Present',
    org: 'Al-Halal Crypto Academy / Halal DAO',
    role: 'Founder & Lead Educator',
    desc: "Founded Nigeria's premier halal-compliant crypto education platform. Trained 5,000+ youths in blockchain, DeFi, and airdrop strategies. On a mission to onboard 1,000,000 people into crypto through live cohorts, workshops, and digital bootcamps.",
    tags: ['Education', 'DAO', 'Community', 'Nigeria'],
  },
  {
    date: '2023',
    org: 'Across Protocol',
    role: 'DEX Referral Ranger',
    desc: 'Top-tier community growth role. Generated $2M+ in verified trading volume by driving protocol adoption, educating users on cross-chain bridging, and building referral pipelines across social channels.',
    tags: ['DeFi', 'Cross-Chain', '$2M Volume'],
  },
  {
    date: '2023',
    org: 'Protocol Gemini',
    role: 'Community Growth & Engagement Lead',
    desc: 'Managed community growth, moderation, and onboarding. Designed engagement campaigns, educational content, and ambassador programs to accelerate user acquisition.',
    tags: ['Growth', 'Ambassador', 'Content'],
  },
  {
    date: '2022 — 2023',
    org: 'Bybit & OrangeX',
    role: 'Campus & Regional Ambassador',
    desc: 'Drove exchange adoption among students and professionals through live workshops, referral campaigns, and community events across campuses in Nigeria.',
    tags: ['Exchange', 'Ambassador', 'Campus'],
  },
]

export const TESTIMONIALS = [
  {
    initials: 'AK',
    name: 'Aisha Kamara',
    handle: 'DeFi Learner, Lagos',
    text: "Mujeeb's training was a game-changer. I went from zero crypto knowledge to participating in real DeFi protocols within 3 weeks. His teaching makes complex concepts click instantly.",
  },
  {
    initials: 'DB',
    name: 'David Bright',
    handle: 'Protocol Growth Lead',
    text: "The Across community growth Mujeeb drove is impressive. He doesn't just talk Web3 — he delivers volume, users, and real engagement. Exactly the kind of operator protocols need.",
  },
  {
    initials: 'YA',
    name: 'Yusuf Abdullahi',
    handle: 'Academy Graduate',
    text: "I joined Al-Halal Crypto Academy with nothing but curiosity. Now I'm farming airdrops and teaching others. Mujeeb's impact on my financial journey is immeasurable.",
  },
  {
    initials: 'FM',
    name: 'Fatima Musa',
    handle: 'Web3 Startup Founder',
    text: 'We hired Mujeeb for community growth and in 2 months our Telegram grew from 200 to 4,000 active members. His content strategy and engagement systems are top tier.',
  },
  {
    initials: 'BO',
    name: 'Bola Okafor',
    handle: 'DeFi Project Lead',
    text: 'The V0 Base DEX Mujeeb built was clean, fast, and production-ready. He shipped in days what agencies quoted weeks for. Exceptional frontend Web3 development skills.',
  },
  {
    initials: 'NK',
    name: 'Ngozi Kelechi',
    handle: 'Bybit Regional Manager',
    text: 'Mujeeb represented Bybit with unmatched professionalism. He brought real users — not bots — and his workshops converted them to active traders. Highly recommend.',
  },
]

export const FAQ = [
  {
    q: 'Are you available for full-time Web3 roles?',
    a: 'Yes — I am actively open to full-time and part-time Web3 roles including community lead, growth manager, educator, and frontend developer positions. Remote-first preferred, but open to opportunities globally.',
  },
  {
    q: 'Do you apply for dev grants?',
    a: 'Absolutely. I actively pursue developer and community grants from Web3 protocols, DAOs, and foundations. My track record with Across Protocol and Al-Halal Academy demonstrates measurable impact that makes grant applications compelling.',
  },
  {
    q: 'Can you train my team or institution in crypto?',
    a: 'Yes. I offer tailored crypto education programs for corporates, NGOs, universities, and youth organizations. Programs range from 1-day workshops to multi-week bootcamps covering DeFi basics to advanced airdrop strategies.',
  },
  {
    q: 'What is your Web3 dev stack?',
    a: 'I build with Next.js (App Router), Tailwind CSS, TypeScript, Wagmi, Viem, and RainbowKit for wallet integration. I deploy primarily on Vercel and have shipped live DEX interfaces on Optimism and Base L2.',
  },
  {
    q: 'How quickly can you respond to inquiries?',
    a: 'I respond to all serious inquiries within 24 hours. For urgent matters, WhatsApp (+234 814 339 9914) is the fastest channel — I am typically online daily.',
  },
  {
    q: 'Do you collaborate with other Web3 builders?',
    a: "Absolutely. I'm always open to collaborations with fellow builders, protocol teams, and educators aligned with growing Web3 adoption in Africa and beyond.",
  },
]
