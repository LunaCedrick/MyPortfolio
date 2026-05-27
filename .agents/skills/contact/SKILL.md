---
name: contact
description: Build the Contact section and Footer of the portfolio with a clean, direct design using HTML and CSS. Include contact cards for email, LinkedIn, and location, as well as a call to action and social media links in the footer.
---
## Goal
Build the Contact section and Footer of the portfolio.
Simple, clean, and direct. Make it easy for recruiters
and clients to reach Cedrick in one click.

## Contact Section Layout
- Section title: "CONTACT" — Bebas Neue, white, uppercase
- Subtitle: "LET'S WORK TOGETHER" — spaced caps, muted #aaaaaa
- Center aligned layout — not a form, just clean contact info
- Two parts: Contact Cards row + Call To Action

## Contact Cards Row
Three cards side by side:

Card 1 — Email
- Icon: envelope icon, crimson red
- Label: "EMAIL" — spaced caps, #aaaaaa
- Value: "cedrick.luna.work@gmail.com" — white
- Click: opens mailto link
- Hover: card border turns #c0392b

Card 2 — LinkedIn
- Icon: LinkedIn icon, crimson red
- Label: "LINKEDIN" — spaced caps, #aaaaaa
- Value: "cedrick-luna-9236b8393" — white
- Click: opens https://www.linkedin.com/in/cedrick-luna-9236b8393/
- Hover: card border turns #c0392b

Card 3 — Location
- Icon: location pin icon, crimson red
- Label: "BASED IN" — spaced caps, #aaaaaa
- Value: "Philippines" — white
- No link needed

## Card Styling
- Background: #1a0a0a
- Border: 1px solid #1a1a1a
- Hover: border color #c0392b, subtle red glow
- Padding: generous (40px)
- Border radius: 4px (subtle, not rounded)
- Transition: 0.2s ease

## Call To Action Block
Below the cards, centered:
- Headline: "OPEN TO OPPORTUNITIES."
  Style: Bebas Neue, large, white
- Subtext: "Whether it's a full-time role, internship, or
  collaboration — I'm ready to bring value from day one."
  Style: Inter, #aaaaaa, centered
- Button: "SEND ME AN EMAIL"
  Style: crimson red #c0392b filled, white text,
  spaced caps, hover darkens to #8b0000
  Link: mailto:cedrick.luna.work@gmail.com

## Footer Layout
- Full width, background: #0d0d0d
- Top border: 1px solid #1a1a1a
- Three parts in one row:
  Left: "CEDRICK LUNA" — Bebas Neue, white, small
  Center: "© 2025 All Rights Reserved." — #aaaaaa, tiny
  Right: Social icons row

## Footer Social Icons
- LinkedIn → https://www.linkedin.com/in/cedrick-luna-9236b8393/
- Facebook → https://www.facebook.com/cedrick.luna.50
- X/Twitter → https://x.com/lunaced_
- GitHub → placeholder
- Style: #aaaaaa default, hover #c0392b, 0.2s transition

## CSS Notes
- Contact section background: #0d0d0d
- Cards use CSS Grid (3 columns desktop, 1 column mobile)
- CTA block max-width 600px centered
- Footer padding: 30px 0
- All links open in new tab (target="_blank")
- Use Font Awesome or inline SVG for icons

## What to Ask Codex
"Using my agents.md and skill-contact.md, build the Contact
section and Footer in HTML and CSS only. Use exact contact
info and social links provided. Comment every section of
the code."