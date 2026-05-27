---
name: hero
description: Build the hero section of the portfolio with a bold, dark tech style using HTML and CSS. Include a fixed navigation bar, two-column layout with profile photo, and decorative elements as described in the reference.
---
## Goal
Build the hero section of the portfolio.
This is the first thing visitors see — it must be bold,
confident, and immediately communicate who I am.

## Reference
Dark tech style. Bold crimson red and white on deep dark background.
Diagonal geometric shapes for depth.
Professional photo as the centerpiece.

## Layout
- Full viewport height (100vh)
- Two column layout:
  Left column (60%): All text content
  Right column (40%): Profile photo
- Diagonal red geometric shape behind the photo for depth
- Decorative code snippet floated to the right background
- Bottom left: 4 icon stats row
- Bottom right: motivational tagline

## Left Column Content
- Small label (top): "COMPUTER ENGINEER"
  Style: spaced caps, crimson red #c0392b, small font size
- Main headline line 1: "BUILDING"
  Style: Bebas Neue, huge (clamp 60px–120px), white #ffffff
- Main headline line 2: "SOLUTIONS."
  Style: Bebas Neue, same size, crimson red #c0392b, bold
- Subtext below headline: "CODE. DESIGN. INNOVATE."
  Style: spaced caps, muted #aaaaaa, small size, letter-spacing 0.3em
- Horizontal red line divider (width: 60px, height: 3px)
- Resume CTA below divider:
  Text: "DOWNLOAD RESUME"
  Link: assets/myResume.pdf
  Style: outlined crimson red button, uppercase spaced caps, compact and recruiter-friendly
  Behavior: opens the resume in a new tab and offers it as a downloadable PDF

## Icon Stats Row (bottom left)
Four items in a row, separated by subtle dividers:
1. </> — DEVELOPMENT
2. ▦ — DESIGN
3. ✦ — INNOVATION
4. ↗ — GROWTH
Style: icon in crimson red, label in white spaced caps, tiny font

## Right Column Content
- Profile photo: centered, no border, blends into dark background
  (use mix-blend-mode or just dark bg behind it)
- Behind photo: diagonal dark maroon #8b0000 geometric shape
- Floating code snippet (decorative, not functional):

  function createImpact() {
    let passion = true;
    let mindset = "growth";
    while (passion) {
      learn();
      build();
      innovate();
      impact();
    }
    return success;
  }

  Style: monospace font, dark red #8b0000 text, very subtle opacity

## Bottom Right Tagline
- "STAY CURIOUS." — white, bold spaced caps
- "KEEP BUILDING." — crimson red #c0392b, bold spaced caps
- Left border: 3px solid crimson red

## Navigation (part of hero layout)
- Fixed top bar, full width
- Left: </> logo in crimson red
- Right: nav links — About, Projects, Contact
- Style: white text, hover turns crimson red
- Background: transparent over hero, #0d0d0d on scroll

## CSS Notes
- Use CSS Grid for the two-column layout
- Use clamp() for responsive font sizes
- Hero background: #0d0d0d with subtle diagonal overlay
- Smooth fade-in animation on page load (opacity 0 → 1, 0.6s ease)

## What to Ask Codex
"Using my agents.md and skill-hero.md, build the 
hero section in HTML and CSS only. Include the navigation.
Make it pixel-perfect to the reference description.
Comment every section of the code."
