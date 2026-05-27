---
name: about
description: Build the About section of the portfolio with a human, confident style using HTML and CSS. Include a two-column layout with a photo, social links, bio, skills, and personality statements as described in the reference.
---
## Goal
Build the About section of the portfolio.
This is where Cedrick becomes a person, not just a resume.
It must feel human, confident, and hireable.

## Layout
- Section title: "ABOUT" — Bebas Neue, white, uppercase
- Subtitle: "WHO I AM" — spaced caps, muted #aaaaaa
- Two column layout:
  Left (40%): Photo + social links below
  Right (60%): Bio, skills, and personality

## Left Column
- Photo: same professional photo from hero section
- Subtle crimson red border accent on one side (3px left border)
- Below photo — social icons row:
  - LinkedIn → https://www.linkedin.com/in/cedrick-luna-9236b8393/
  - Facebook → https://www.facebook.com/cedrick.luna.50
  - X/Twitter → https://x.com/lunaced_
  - GitHub → https://github.com/LunaCedrick/
  - Email → cedrick.luna.work@gmail.com
  - Style: icons in #aaaaaa, hover turns #c0392b, smooth transition
  - Use Font Awesome icons instead of text placeholders:
    LinkedIn: fa-brands fa-linkedin-in
    Facebook: fa-brands fa-facebook-f
    X/Twitter: fa-brands fa-x-twitter
    GitHub: fa-brands fa-github
    Email: fa-solid fa-envelope
  - Keep aria-label on each link and put aria-hidden="true" on each decorative <i> icon.

## Right Column

### Name & Title Block
- Full name: "CEDRICK MASALUNGA LUNA"
  Style: Bebas Neue, large, white
- Title: "ASPIRING SOFTWARE ENGINEER"
  Style: spaced caps, crimson red #c0392b, small

### Bio
"I'm Cedrick, a fresh Computer Engineering graduate with a
genuine passion for software and cloud engineering. I don't
just study this — I love it. I'm the kind of person who
learns fast, builds faster, and is always hungry to grow.
Currently seeking my first role where I can contribute,
level up, and prove that potential backed by dedication
beats experience every time."

Style: Inter, #aaaaaa, line-height 1.8, readable

### Skills Block
- Label: "TECHNICAL SKILLS" — spaced caps, crimson red
- Display as pill tags:
  Background: transparent
  Border: 1px solid #c0392b
  Text: #ffffff
  Hover: background fills #c0392b
  Skills list:
  Python | HTML | CSS | JavaScript |
  Git | GitHub | Cloud Basics | Problem Solving

### Personality Block
- Label: "WHAT DRIVES ME" — spaced caps, crimson red
- 3 short bold statements with crimson red left border:
  | "Fast learner who thrives under pressure."
  | "Passionate about building real solutions."
  | "Cloud and software engineering is not just a career — it's a calling."

## CSS Notes
- Section background: #0d0d0d
- Use CSS Grid for two column layout
- Mobile: stack to single column, photo on top
- Skill tags wrap naturally on smaller screens
- Smooth hover transitions on social icons and skill tags (0.2s ease)

## What to Ask Codex
"Using my agents.md and skill-about.md, build the About
section in HTML and CSS only. Use the exact bio, skills,
and social links provided. Comment every section of the code."
