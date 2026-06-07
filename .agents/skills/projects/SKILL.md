---
name: projects
description: Build the projects section of the portfolio with 3 clickable cards and modal popups using HTML, CSS, and vanilla JavaScript. Use placeholder data for project details.
---

## Goal
Build the projects section of the portfolio.
Showcase 3 projects in a clickable card grid.
Each card opens a modal with project details.

## Layout
- Section title: "PROJECTS" — Bebas Neue, white, uppercase
- Subtitle: "THINGS I'VE BUILT" — spaced caps, muted #aaaaaa
- Cards sit inside a horizontal scrollable carousel
- On desktop: show 3 cards with a hint of the next card when more projects are added
- On mobile: show 1 full card with a hint of the next card
- Hide the scrollbar visually while preserving scroll and swipe behavior
- Add subtle left/right arrow buttons for desktop users only
- Arrow buttons use Font Awesome chevrons, crimson red #c0392b, dark background, and 0.2s ease hover
- Each card is clickable — opens a modal overlay

## Project Card Design
- Background: #1a0a0a
- Border: 1px solid #1a1a1a
- Hover: border color transitions to #c0392b, subtle red glow
- Cards must keep their existing visuals inside the carousel
- Cards use a fixed min-width and flex-shrink: 0 so they do not compress
- Top: project thumbnail area (dark placeholder if no image)
- Middle: project name in white bold, tech stack tags in crimson red
- Bottom: "VIEW PROJECT →" label in crimson red spaced caps
- Smooth hover transition: translateY(-5px) with red border glow

## Card Content (placeholder structure)
Each card has:
- Project Name: "PROJECT NAME" (to be filled)
- Short description: "Short one-liner about the project." (to be filled)
- Tech stack tags: e.g. Python, HTML, CSS (to be filled)
- Thumbnail: placeholder dark image with </> icon centered

## Modal Popup (on card click)
- Overlay: rgba(0,0,0,0.85) full screen backdrop
- Modal box: #1a0a0a background, crimson red top border (3px)
- Close button: X top right, white, hover red
- Modal content:
  - Project name: Bebas Neue, large, white
  - Created date: small muted line below title and above overview, populated from JavaScript data
  - Overview paragraph: Inter, #aaaaaa
  - Features list: bullet points, crimson red bullets
  - Tech stack tags: small pill tags, #c0392b background
  - Live link button: "VIEW LIVE →" crimson red filled button
  - GitHub button: "VIEW CODE →" outlined crimson red button
  - Documentation button: "VIEW DOCS →" outlined crimson red button, opens documentation PDF/link in a new tab
  - Documentation button is optional and must be hidden when no docs link exists
- Modal opens with subtle fade + scale animation
- Click outside modal to close

## Placeholder Data (to be replaced later)
Project 1:
  Name: "PROJECT ONE"
  Description: "A short description of what this project does."
  Date: "May 2026"
  Features: ["Feature one", "Feature two", "Feature three"]
  Tech: ["HTML", "CSS", "JavaScript"]
  Live Link: "#"
  GitHub: "#"
  Docs Link: "#"

Project 2:
  Name: "PROJECT TWO"
  Description: "A short description of what this project does."
  Date: "May 2026"
  Features: ["Feature one", "Feature two", "Feature three"]
  Tech: ["Python", "HTML", "CSS"]
  Live Link: "#"
  GitHub: "#"
  Docs Link: "#"

Project 3:
  Name: "PROJECT THREE"
  Description: "A short description of what this project does."
  Date: "May 2026"
  Features: ["Feature one", "Feature two", "Feature three"]
  Tech: ["HTML", "CSS", "JavaScript"]
  Live Link: "#"
  GitHub: "#"
  Docs Link: "#"

## JavaScript Notes
- Use vanilla JS for modal open/close
- Add event listener on each card
- Close on backdrop click and X button
- Trap focus inside modal for accessibility
- Add vanilla JS for project carousel arrow scrolling
- Use a projects track with id="projects-track"
- Scroll amount should match one card width plus the carousel gap
- Add date to each project data object in "Month Year" format
- Show the modal date field only when a project has a date; keep it hidden if no date exists
- Add docsLink to each project data object when documentation exists
- Show the modal docs button only when a project has a docsLink; keep it hidden if no docs link exists

## What to Ask Codex
"Using my agents.md and skill-projects.md, build the 
projects section with 3 clickable cards and working modal 
popups. Use placeholder data. HTML, CSS, and vanilla JS only.
Comment every section of the code."
