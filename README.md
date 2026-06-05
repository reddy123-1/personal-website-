# Tejas R — Personal Portfolio

A modern, premium personal portfolio website built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Features

- Dark theme with glassmorphism effects
- Smooth scroll animations and custom cursor
- Scroll progress indicator
- Fully responsive, mobile-first design
- SEO optimized with metadata
- Reusable component architecture

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # Next.js app router pages & layout
├── components/
│   ├── effects/      # Custom cursor, scroll progress, background
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, About, etc.)
│   └── ui/           # Reusable UI components
├── data/             # Site content & configuration
├── lib/              # Utility functions
└── types/            # TypeScript interfaces
```

## Customization

- Update personal info in `src/data/site.ts`
- Modify skills in `src/data/skills.ts`
- Add/edit projects in `src/data/projects.ts`
- Replace placeholder resume at `public/resume.pdf`

## License

MIT
