---
name: responsive
description: Ensures the portfolio is fully responsive and works seamlessly across all screen sizes, from mobile to desktop.
---

## Goal
Audit the entire portfolio for responsive behavior.
No section gets a pass until the full page works
cleanly from 320px mobile to 1920px desktop.

## How To Use This Skill
Use this ONCE — after all sections are complete.
Feed Codex:
1. agents.md
2. skill-responsive.md
3. The full index.html and style.css

Prompt to use:
"Read agents.md and skill-responsive.md.
Audit the full code I am about to paste for
responsive issues. Fix everything and explain
what was changed."

## Responsive Checklist

### Layout
- [ ] Every CSS Grid stacks to 1 column on mobile
- [ ] Every Flexbox row wraps or stacks on mobile
- [ ] No fixed pixel widths that cause overflow
- [ ] Max-width containers are centered correctly
- [ ] Hero section works on mobile — text readable,
      photo scales correctly

### Typography
- [ ] Headlines use clamp() for fluid font scaling
- [ ] Body text is readable on small screens
- [ ] Letter spacing does not break layout on mobile
- [ ] No text overflow or cutoff at any screen size

### Navigation
- [ ] Nav collapses gracefully on mobile
- [ ] Hamburger menu or stacked nav on small screens
- [ ] Nav links are large enough to tap — min 44px

### Images
- [ ] Profile photo scales within its container
- [ ] No images overflow their parent element
- [ ] Images use max-width: 100% as a base rule

### Spacing
- [ ] Padding reduces on mobile — sections not cramped
- [ ] Gaps between elements scale down appropriately
- [ ] No excessive whitespace on small screens

### Interactions
- [ ] Hover states have touch fallbacks on mobile
- [ ] Modal works correctly on mobile screen sizes
- [ ] All buttons and links are easily tappable

### Testing Breakpoints
Check every section at exactly these widths:
- 320px  → smallest mobile
- 375px  → standard mobile
- 768px  → tablet breakpoint
- 1024px → desktop breakpoint
- 1440px → wide desktop