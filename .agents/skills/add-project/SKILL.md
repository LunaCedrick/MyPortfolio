---
name: add-project
description: Add or update a single portfolio project in the existing Projects carousel and modal system. Use when the user provides project details such as name, card description, full overview, tech stack, features, created date, live link, GitHub link, documentation PDF/link, or thumbnail and wants one project added without rebuilding the whole section.
---

## Goal
Add one project to the existing portfolio Projects section.
Keep the current carousel, card design, modal behavior, responsiveness,
and dark tech visual system intact.

This skill is for incremental project additions only.
Do not rebuild the Projects section.

## Required Inputs
Ask for missing required fields before editing if they cannot be reasonably inferred.

- Project name
- Card description
- Full modal overview
- Created date in "Month Year" format
- Tech stack list
- Features list
- Live link, or empty if unavailable
- GitHub link, or empty if unavailable
- Docs link/PDF path, or empty if unavailable
- Thumbnail image path, or empty if unavailable

## Data Rules
- Keep card text short and scannable.
- Store the card preview separately from the full modal overview when needed.
- Card description must not force card height misalignment.
- Full modal overview can be longer and should contain the complete explanation.
- Use empty strings for unavailable links instead of fake links when the button should be hidden.
- Documentation is optional and should use `docsLink`.
- Documentation links open in a new tab through the modal "VIEW DOCS" action.

## Card Description Rule
Project cards are for scanning, not full reading.
If the card description is long, keep the card visually aligned by clamping it to 2 lines.

Expected CSS behavior:

```css
.project-card__description {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

The full details must appear in the modal overview.

## HTML Update Rules
- Add the new project card inside `#projects-track`.
- Preserve the existing `.project-card` structure.
- Use the next available `data-project-index` value.
- Keep the thumbnail placeholder if no thumbnail is provided.
- If a thumbnail is provided, use the existing card visual language and do not add inline styles.
- Do not change section heading, carousel wrapper, arrows, or existing cards unless required for indexing.

## JavaScript Update Rules
Update the `projects` array in `script.js`.

Each project object should support:

```javascript
{
  name: "Project Name",
  description: "Full modal overview.",
  cardDescription: "Short card preview.",
  date: "May 2026",
  features: ["Feature one", "Feature two", "Feature three"],
  tech: ["HTML", "CSS", "JavaScript"],
  liveLink: "",
  githubLink: "",
  docsLink: ""
}
```

If the current code does not yet use `cardDescription`, add support carefully:
- Card HTML can use the short preview directly.
- Modal overview must continue using `project.description`.
- Keep existing modal open/close, focus trap, carousel arrows, and date/docs visibility logic.

## Link Button Rules
- `liveLink` controls "VIEW LIVE".
- `githubLink` controls "VIEW CODE".
- `docsLink` controls "VIEW DOCS".
- If a link is empty, hide that button in the modal.
- Do not leave unavailable optional buttons pointing to `#` in final project data.

## CSS Rules
- Reuse existing classes whenever possible.
- Add only scoped CSS under Projects or Project modal rules.
- Preserve the carousel shadow/glow breathing room:
  `padding: 16px 10px 52px` and `margin: -16px -10px -28px` on `.projects__track`.
- Preserve mobile modal action stacking under 420px.
- Never change the sacred accent color `#c0392b`.

## Verification
After editing:
- Run `node --check script.js`.
- Check that project card indexes match `projects` array order.
- Confirm card descriptions stay aligned.
- Confirm modal shows full overview, features, tech, date, and available buttons.
- Confirm unavailable live/code/docs links are hidden.
- Confirm carousel still scrolls and no horizontal page overflow is introduced.

## What To Ask Codex
"Use the add-project skill. Add this project to my portfolio:
Project name:
Card description:
Full overview:
Created date:
Tech stack:
Features:
Live link:
GitHub link:
Docs link:
Thumbnail path:"
