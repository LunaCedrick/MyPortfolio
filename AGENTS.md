# agents.md — Portfolio Project

## 1. Project Overview
A personal dark-themed portfolio website to showcase my projects and skills.
Bold, tech-forward, and confident design.
Will be linked on my resume as a live portfolio.

## 2. Tech Stack
- HTML & CSS (no frameworks, keep it simple)
- Vanilla JavaScript (for small interactions only)
- Static site — no backend needed
- Deployment: GitHub Pages (free)

## 3. Design System
- Style: Dark tech — bold, powerful, minimal but striking
- Background: #0d0d0d (main), #1a0a0a (sections with depth)
- Accent Primary: #c0392b (crimson red — buttons, highlights, key text)
- Accent Secondary: #8b0000 (dark maroon — overlays, depth, geometric shapes)
- Text Primary: #ffffff
- Text Secondary: #aaaaaa (muted labels, subtitles)
- Font Headlines: Bold heavy uppercase (use Google Fonts: Bebas Neue or Oswald)
- Font Body: Clean sans-serif (use Google Fonts: Inter)
- Letter spacing: generous on labels and subtitles (0.15em–0.3em)
- Geometric diagonal shapes as background decoration
- Subtle dot/grid texture overlay on sections
- Code snippets as decorative background elements

## 4. Rules of the Road
- Keep code clean and beginner-readable
- Always comment the code so I understand it
- Mobile responsive is a must
- Accent color #c0392b is sacred — never change it
- Bold uppercase headlines only — no lowercase for section titles
- Every element must have a purpose — no fluff
- Diagonal geometric overlays for visual depth
- NO CSS frameworks like Bootstrap or Tailwind
- NO heavy JS libraries

## 5. Portfolio Sections (in order)
1. Navigation — fixed top, clean with </> logo and nav links
2. Hero — full screen, photo left/center, bold headline left, code snippet right
3. About — short bio, skills, personality
4. Projects — dark cards with red accent hover
5. Contact — minimal, clean
6. Footer — copyright and social links

## 6. Hero Section Reference
- Label: "COMPUTER ENGINEER" (small spaced caps, red accent)
- Headline: "BUILDING" (white) + "SOLUTIONS." (red, bold)
- Subtext: "CODE. DESIGN. INNOVATE." (spaced caps, muted)
- Icons row: </> DEVELOPMENT, DESIGN, INNOVATION, GROWTH
- Right side: decorative code snippet in dark red
- Bottom right: "STAY CURIOUS. KEEP BUILDING." with red accent
- Photo: professional shot, center-right placement

## 7. Project Structure
myportfolio/
├── index.html         # Main Page
├── style.css          # All styles
├── script.js          # Minor interactions
├── agents.md          # The Brain
├── skills/            # Useable Skills
│   ├── hero/SKILL.md
│   ├── about/SKILL.md
│   ├── projects/SKILL.md
│   ├── contact/SKILL.md
│   ├── review/SKILL.md
│   ├── responsive/SKILL.md
│   ├── accessibility/SKILL.md
│   ├── performance/SKILL.md
│   └── ui-consistency/SKILL.md
└── assets/            # Project assets
    └── images/
        └── profile-picture.png

## Component Rules

- Reuse existing classes when possible
- Avoid duplicate CSS
- Keep sections modular
- Use semantic HTML
- Avoid inline styles
- Keep JS separated from HTML

## Naming Conventions

CSS:
- kebab-case only

Classes:
- section-name__element
- section-name--modifier

JavaScript:
- camelCase

Files:
- lowercase only

## Responsive Rules

- Mobile first
- Breakpoints:
  - 768px tablet
  - 1024px desktop
- Never allow horizontal scrolling
- Stack grids vertically on mobile

##
Never rewrite entire files unless necessary.
Prefer incremental edits.
Preserve existing structure.
