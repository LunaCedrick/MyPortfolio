---
name: review
description: Review any generated section for quality,
consistency, and correctness before it goes into the final build.
Always read agents.md first before performing this review.
---

## Goal
Audit the generated code for the current section.
Catch every error, inconsistency, and bad practice
before it becomes a permanent part of the build.
Output a clear pass/warn/fail report with fixes.

## How To Use This Skill
Feed Codex:
1. agents.md
2. skill-review.md
3. The generated code to review

Prompt to use:
"Read agents.md and skill-review.md.
Review the code I am about to paste.
Output a full audit report with ✅ PASS,
⚠️ WARN, and ❌ FAIL items. Fix all FAIL
items and list what was changed."

## Audit Checklist

### HTML Quality
- [ ] Semantic tags used — header, nav, main, section,
      footer, article. No div where semantic tag fits.
- [ ] No inline styles anywhere in the HTML
- [ ] No deprecated tags or attributes
- [ ] All images have descriptive alt attributes
- [ ] All links have meaningful text — no "click here"
- [ ] Buttons use <button>, links use <a> — never swapped
- [ ] IDs are unique — no duplicate IDs on the page
- [ ] Classes follow kebab-case naming only
- [ ] BEM convention followed: section__element--modifier

### CSS Quality
- [ ] No inline styles — all styles live in style.css
- [ ] No duplicate CSS rules — reuse existing classes
- [ ] Colors match design system exactly:
      Background main: #0d0d0d
      Background depth: #1a0a0a
      Accent primary: #c0392b
      Accent secondary: #8b0000
      Text primary: #ffffff
      Text secondary: #aaaaaa
- [ ] No hardcoded color values outside this system
- [ ] Accent color #c0392b is never substituted or modified
- [ ] Fonts used correctly:
      Headlines: Bebas Neue or Oswald — bold uppercase only
      Body: Inter
- [ ] No Bootstrap, Tailwind, or any CSS framework
- [ ] Letter spacing on labels: 0.15em–0.3em
- [ ] All hover transitions are exactly: 0.2s ease
- [ ] All section titles are bold uppercase — never lowercase
- [ ] No heavy JS libraries imported
- [ ] Mobile-first CSS structure respected
- [ ] Breakpoints used correctly:
      768px → tablet
      1024px → desktop
- [ ] No horizontal scrolling possible at any width
- [ ] Grids stack to single column on mobile

### JavaScript Quality
- [ ] Vanilla JS only — no jQuery, no libraries
- [ ] All JS lives in script.js — none in HTML file
- [ ] camelCase naming for all JS variables and functions
- [ ] Event listeners used correctly
- [ ] No console.log left in final code
- [ ] JS is minimal — only for necessary interactions

### Visual Consistency
- [ ] Spacing feels consistent with existing sections
- [ ] Card styling matches: background #1a0a0a,
      border 1px solid #1a1a1a, border-radius 4px
- [ ] Hover states on cards: border turns #c0392b,
      subtle red glow, translateY(-5px)
- [ ] All animations use transform and opacity only
- [ ] Section structure: title in Bebas Neue white,
      subtitle in spaced caps muted #aaaaaa

### Code Readability
- [ ] Every section of code has a comment above it
- [ ] Comments are clear and beginner-readable
- [ ] No minified or compressed code
- [ ] Consistent indentation throughout — 2 spaces

## Output Format

After auditing, output exactly this format:

---
SECTION REVIEWED: [section name]
---

✅ PASS
- List everything done correctly

⚠️  WARN
- List minor issues that won't break but should be fixed
- Include suggested fix for each

❌ FAIL
- List critical issues that must be fixed
- Include the exact corrected code for each

---
FIXES APPLIED: [yes/no]
READY TO PROCEED: [yes/no]
---

## Rules For This Skill
- Never skip a checklist item
- Always provide the fix, not just the problem
- If FAIL items exist, apply fixes before marking ready
- Do not approve code that violates agents.md rules
- When in doubt — flag it