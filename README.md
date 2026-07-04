# João V. B. Rodrigues — Developer Portfolio

A modern, gamified personal portfolio built with **Next.js 15** (App Router) and **TypeScript**. Designed with a dark industrial / cyber-HUD aesthetic, featuring animated skill bars, typing effects, glitch text, and real GitHub project data.

**Live:** _coming soon_

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules (custom design system) |
| Icons | Lucide React + custom SVGs |
| Animations | CSS keyframes + Intersection Observer |
| Fonts | Orbitron (display) · JetBrains Mono (body) |
| Deploy | Vercel |

---

## Features

- **Hero** — Typing animation cycling through roles, floating particles, HUD corner brackets, scroll indicator
- **About** — Player profile card, animated XP skill bars (IntersectionObserver), professional timeline
- **Services** — WordPress, Laravel/PHP, React/Next.js, Performance & SEO — each with feature list and tech stack
- **Projects** — Live data from my GitHub repositories displayed as HUD cards with language badges
- **Contact** — Styled form (mailto fallback), terminal decoration card, social links
- **Navbar** — Floating with glass effect on scroll, active section detection, mobile hamburger menu
- **Accessibility** — Semantic HTML, ARIA labels, focus states, `prefers-reduced-motion` support
- **SEO** — Full metadata, Open Graph, Twitter card tags

---

## Projects Featured

| Project | Stack | Link |
|---|---|---|
| TTRPG Social | Laravel · PHP · Blade · Docker | [GitHub](https://github.com/JoaoVBRodrigues/ttrpg-social) |
| News Center | PHP · MySQL · CSS | [GitHub](https://github.com/JoaoVBRodrigues/News-Center) |
| Prompt Engineer | Laravel · PHP · Blade | [GitHub](https://github.com/JoaoVBRodrigues/Prompt-Engineer) |
| Gallery Project | PHP · MySQL | [GitHub](https://github.com/JoaoVBRodrigues/Gallery-Project) |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/JoaoVBRodrigues/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### E-mail Setup (Contact Form)

The contact form uses **Resend** to send emails securely from a Next.js API route.

1. Sign up for a free account at [Resend](https://resend.com).
2. Create an API Key in the Resend dashboard.
3. Create a local environment file:
   ```bash
   cp .env.example .env.local
   ```
4. Paste your Resend API Key into `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

*Note: In the free tier, Resend allows sending emails to your own registered email address (e.g. `joaovictor.brodr@gmail.com`). If the API key is not configured, the form automatically falls back to opening a `mailto:` link so the contact functionality is never broken.*

### Build for production

```bash
npm run build
npm run start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, fonts
│   ├── page.tsx          # Main page assembly
│   └── globals.css       # Design tokens, reset, utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── GlitchText.tsx
│       ├── SkillBar.tsx
│       ├── AnimatedCounter.tsx
│       └── BrandIcons.tsx
└── data/
    ├── projects.ts
    └── services.ts
```

---

## Design System

The portfolio uses a custom design system defined in `globals.css` via CSS custom properties.

**Color palette:**

```css
--bg-primary:    #0a0a0f   /* near-black background   */
--accent-cyan:   #00d4ff   /* primary HUD color       */
--accent-purple: #8b5cf6   /* secondary accent        */
--accent-green:  #39ff14   /* status / availability   */
--accent-orange: #ff6b35   /* warning / highlight     */
```

**Typography:**
- **Display** — [Orbitron](https://fonts.google.com/specimen/Orbitron) — headings, logo, numbers
- **Body** — [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — body text, labels, code

---

## Contact

- **Email** — joaovictor.brodr@gmail.com
- **LinkedIn** — [linkedin.com/in/joão-rodrigues-a94417255](https://www.linkedin.com/in/jo%C3%A3o-rodrigues-a94417255/)
- **GitHub** — [github.com/JoaoVBRodrigues](https://github.com/JoaoVBRodrigues)

---

## License

This project is open source and available under the [MIT License](LICENSE).
