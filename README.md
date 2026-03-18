# Mujeeb.dev — Web3 Portfolio

Personal portfolio for **Adebimpe Mujeeb Adegoke** — Web3 Builder, Crypto Educator & Vibe Code Developer.

Built with **Vite + React**, styled with **CSS Modules**, deployed on **Vercel**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
mujeeb-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AvailabilityBanner.jsx  + .module.css
│   │   ├── Navbar.jsx              + .module.css
│   │   ├── Hero.jsx                + .module.css
│   │   ├── Marquee.jsx             + .module.css
│   │   ├── About.jsx               + .module.css
│   │   ├── Achievements.jsx        + .module.css
│   │   ├── Protocols.jsx           + .module.css
│   │   ├── Services.jsx            + .module.css
│   │   ├── Projects.jsx            + .module.css
│   │   ├── Experience.jsx          + .module.css
│   │   ├── Testimonials.jsx        + .module.css
│   │   ├── FAQ.jsx                 + .module.css
│   │   ├── Contact.jsx             + .module.css
│   │   ├── CTAStrip.jsx            + .module.css
│   │   ├── Footer.jsx              + .module.css
│   │   └── ScrollToTop.jsx
│   ├── styles/
│   │   └── index.css               (global tokens + base styles)
│   ├── data.js                     (all content — edit here!)
│   ├── hooks.js                    (scroll reveal, count-up, skill bars)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
├── .gitignore
└── README.md
```

---

## ✏️ How to Customise

All content lives in **`src/data.js`** — one file to rule them all.

| Export | What it controls |
|---|---|
| `PERSONAL` | Name, bio, avatar URL, availability status |
| `CONTACT` | WhatsApp, email, Twitter, GitHub, Formspree ID |
| `STATS` | Hero animated counters |
| `ACHIEVEMENTS` | Achievement section counters |
| `SKILLS` | Skill bar names and percentages |
| `PROTOCOLS` | Trust bar logos/names |
| `SERVICES` | Service cards content |
| `PROJECTS` | Project cards, URLs, tags |
| `EXPERIENCE` | Timeline entries |
| `TESTIMONIALS` | Testimonial cards |
| `FAQ` | Accordion questions and answers |

### Update the contact form (Formspree)
In `src/data.js`, find `CONTACT.formspree` and replace the endpoint:
```js
formspree: 'https://formspree.io/f/YOUR_FORM_ID',
```

### Update profile photo
Replace the Google Drive thumbnail URL in `PERSONAL.avatar`:
```js
avatar: 'https://drive.google.com/thumbnail?id=YOUR_FILE_ID&sz=w200',
```
> The image must be shared publicly ("Anyone with the link can view").

### Change availability status
```js
// src/data.js
available: true,  // set to false to hide the banner
availableText: '🟢 AVAILABLE FOR HIRE — Web3 Roles, Grants & Partnerships',
```

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub Integration
1. Push to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy** ✅

The `vercel.json` file handles SPA routing automatically.

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| Vite 5 | Build tool & dev server |
| React 18 | UI framework |
| CSS Modules | Scoped component styles |
| Formspree | Contact form backend |
| Vercel | Hosting & deployment |

No Tailwind, no heavy UI libraries — pure CSS Modules keep the bundle lean and styles predictable.

---

## 📬 Contact Form

The form submits to **Formspree** (`https://formspree.io/f/mpqykdpv`).

To activate:
1. Sign in at [formspree.io](https://formspree.io)
2. Open form `mpqykdpv`
3. Confirm your email address

Every submission will arrive at **Elemuje@gmail.com**.

---

## 📄 License

MIT — free to use and adapt for your own portfolio.
