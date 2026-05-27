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
- 3 cards in a row (desktop), 1 column (mobile)
- Each card is clickable — opens a modal overlay

## Project Card Design
- Background: #1a0a0a
- Border: 1px solid #1a1a1a
- Hover: border color transitions to #c0392b, subtle red glow
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
  - Overview paragraph: Inter, #aaaaaa
  - Features list: bullet points, crimson red bullets
  - Tech stack tags: small pill tags, #c0392b background
  - Live link button: "VIEW LIVE →" crimson red filled button
  - GitHub button: "VIEW CODE →" outlined crimson red button
- Modal opens with subtle fade + scale animation
- Click outside modal to close

## Placeholder Data (to be replaced later)
Project 1:
  Name: "PROJECT ONE"
  Description: "A short description of what this project does."
  Features: ["Feature one", "Feature two", "Feature three"]
  Tech: ["HTML", "CSS", "JavaScript"]
  Live Link: "#"
  GitHub: "#"

Project 2:
  Name: "PROJECT TWO"
  Description: "A short description of what this project does."
  Features: ["Feature one", "Feature two", "Feature three"]
  Tech: ["Python", "HTML", "CSS"]
  Live Link: "#"
  GitHub: "#"

Project 3:
  Name: "PROJECT THREE"
  Description: "A short description of what this project does."
  Features: ["Feature one", "Feature two", "Feature three"]
  Tech: ["HTML", "CSS", "JavaScript"]
  Live Link: "#"
  GitHub: "#"

## JavaScript Notes
- Use vanilla JS for modal open/close
- Add event listener on each card
- Close on backdrop click and X button
- Trap focus inside modal for accessibility

## What to Ask Codex
"Using my agents.md and skill-projects.md, build the 
projects section with 3 clickable cards and working modal 
popups. Use placeholder data. HTML, CSS, and vanilla JS only.
Comment every section of the code."