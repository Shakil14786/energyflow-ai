# EnergyFlow AI

A hackathon-prototype landing page for **EnergyFlow AI**, a conceptual product that helps
energy-dependent businesses keep supply moving if the Strait of Hormuz becomes unavailable for a
sustained period.

This is a static, frontend-only prototype — no backend, no auth, no real data. It exists to
communicate product thinking, system design, and AI integration to hackathon judges.

## Stack

- React 18 + Vite 5
- Tailwind CSS
- [lucide-react](https://lucide.dev/) icons
- Plain CSS + IntersectionObserver for entrance animations (no animation library required)

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Vite**. No environment variables or backend are needed.
4. Deploy.

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    HeroDashboardMockup.jsx
    Problem.jsx
    WorldMapSVG.jsx
    Solution.jsx
    Dashboard.jsx
    Workflow.jsx
    Architecture.jsx
    AICapabilities.jsx
    BusinessWorkflow.jsx
    GTM.jsx
    Pricing.jsx
    Comparison.jsx
    FutureVision.jsx
    Footer.jsx
  hooks/
    useReveal.js   # scroll-triggered fade-up animation
  App.jsx
  main.jsx
  index.css
```

## Notes for presenting to judges

- All dashboard numbers, prices, and statistics are illustrative sample data.
- The world map and architecture diagram are simplified original SVG illustrations, not
  copyrighted map data.
- Replace the "Your Photo" placeholder and "Download Resume" / LinkedIn / GitHub links in the
  hero and footer with your own details before presenting.
