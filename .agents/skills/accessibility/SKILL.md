---
name: accessibility
description: Accessibility audit to ensure the portfolio
is professional, inclusive, and technically correct.
---

## Goal
Make the portfolio usable and professional at a level
that separates junior work from senior-quality output.
Recruiters and senior developers notice this.

## How To Use This Skill
Use this after the responsive pass is complete.
Feed Codex:
1. agents.md
2. skill-accessibility.md
3. The full index.html and style.css

Prompt to use:
"Read agents.md and skill-accessibility.md.
Audit the full code I am about to paste for
accessibility issues. Fix everything and explain
what was changed."

## Accessibility Checklist

### Images
- [ ] Every <img> has a descriptive alt attribute
- [ ] Decorative images have alt="" (empty, not missing)
- [ ] Profile photo alt describes who it is

### Links and Buttons
- [ ] Every <a> has meaningful link text
- [ ] Every <button> has a clear label or aria-label
- [ ] External links have target="_blank" and
      rel="noopener noreferrer"
- [ ] No empty href attributes

### Keyboard Navigation
- [ ] Full page is navigable using Tab key only
- [ ] Focus states are visible — not hidden with
      outline: none unless replaced with custom style
- [ ] Modal can be closed with Escape key
- [ ] Logical tab order follows visual layout

### Semantic Structure
- [ ] One <h1> only on the entire page
- [ ] Heading hierarchy is logical: h1 → h2 → h3
- [ ] Landmark regions exist: header, nav, main, footer
- [ ] No skipped heading levels

### Color and Contrast
- [ ] White #ffffff on #c0392b — verify contrast passes
- [ ] White #ffffff on #0d0d0d — passes (high contrast)
- [ ] Muted text #aaaaaa on #0d0d0d — flag if it fails
- [ ] Text is never communicated by color alone

### ARIA
- [ ] Modal has role="dialog" and aria-modal="true"
- [ ] Nav has aria-label="Main navigation"
- [ ] Icon-only buttons have aria-label attributes