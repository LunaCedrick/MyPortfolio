---
name: performance
description: Final performance cleanup before deployment
to GitHub Pages. Ensures fast load, clean code, and
smooth animations.
---

## Goal
Clean up the entire codebase before it goes live.
A fast, clean portfolio reflects professional standards.

## How To Use This Skill
Use this LAST — right before pushing to GitHub Pages.
Feed Codex:
1. agents.md
2. skill-performance.md
3. The full index.html, style.css, and script.js

Prompt to use:
"Read agents.md and skill-performance.md.
Audit the full code I am about to paste for
performance issues. Fix everything and explain
what was changed."

## Performance Checklist

### CSS Cleanup
- [ ] No unused CSS rules or classes
- [ ] No duplicate declarations
- [ ] Animations only use transform and opacity —
      never animate width, height, or top/left
- [ ] Transitions are consistent — 0.2s ease throughout
- [ ] No @import inside CSS files — use <link> in HTML

### HTML Cleanup
- [ ] No commented-out dead code left in HTML
- [ ] No unused IDs or classes
- [ ] Script tags are at bottom of <body> or use defer
- [ ] Google Fonts loaded with display=swap parameter

### JavaScript Cleanup
- [ ] No console.log statements anywhere
- [ ] No unused variables or functions
- [ ] Event listeners are clean — no duplicates
- [ ] No synchronous operations blocking the page

### Assets
- [ ] Profile photo is optimized — under 300kb ideally
- [ ] No images larger than their display size
- [ ] All asset paths are correct and case-sensitive

### Final Checks
- [ ] Page title is set correctly in <head>
- [ ] Meta description exists for SEO
- [ ] Favicon exists (even a simple one)
- [ ] All placeholder links (#) are replaced with
      real links or removed
- [ ] GitHub and social links open in new tab
- [ ] Copyright year is correct