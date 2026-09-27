# Portfolio UI Redesign --- Codex Implementation Specification

## Project

Repository: `LunaCedrick/MyPortfolio`

Current architecture:

-   Plain HTML
-   Plain CSS
-   Vanilla JavaScript
-   No React/Next/Tailwind rewrite required
-   Existing responsive layout
-   Existing project carousel
-   Existing project detail modal
-   Existing keyboard/focus handling
-   Existing reduced-motion support
-   Existing red / black visual identity
-   Existing hero portrait + decorative code block
-   Existing Font Awesome icons

## Primary Objective

Redesign the portfolio so it feels:

-   **minimal**
-   **premium**
-   **technical**
-   **editorial**
-   **alive**
-   **interactive**
-   **intentional**

The goal is **not** to add random animations everywhere.

The goal is to create a coherent motion system where the interface
responds to scrolling, hovering, pointer movement, and interaction while
remaining clean and professional.

The final result should feel like a polished modern software-engineering
portfolio, not a template full of effects.

------------------------------------------------------------------------

# 1. Non-Negotiable Design Direction

## Core visual language

Keep the existing dark/red identity, but make it more sophisticated.

Use:

-   near-black backgrounds
-   off-white text
-   existing crimson/red accent
-   thin borders
-   large typography
-   generous whitespace
-   subtle gradients
-   restrained glow
-   subtle depth
-   editorial spacing
-   technical details such as grid lines, code, metadata, labels, and
    small status indicators

Avoid:

-   excessive gradients
-   excessive glassmorphism
-   huge glowing effects
-   rainbow colors
-   generic SaaS cards
-   excessive rounded corners
-   noisy particle systems
-   unnecessary 3D
-   Three.js unless there is a compelling reason
-   animations that distract from content

The design should communicate:

> **minimal × technical × editorial × interactive**

------------------------------------------------------------------------

# 2. Important Implementation Principle

Do **not** rewrite the project into React, Next.js, Tailwind, or another
framework just to modernize the UI.

Keep the existing:

-   `index.html`
-   `style.css`
-   `script.js`

architecture.

Use:

-   CSS transitions
-   CSS keyframes
-   IntersectionObserver
-   `requestAnimationFrame`
-   pointer events
-   CSS custom properties
-   lightweight vanilla JavaScript

Only add an external animation library if it provides a clear benefit
that cannot be achieved cleanly with the existing stack.

Prefer native browser APIs.

------------------------------------------------------------------------

# 3. Motion Philosophy

The website should feel alive through **small coordinated movements**.

Use a hierarchy of motion:

### Level 1 --- Ambient

Always-present but extremely subtle.

Examples:

-   slowly moving background glow
-   tiny gradient movement
-   code cursor blink
-   subtle background grid movement
-   gentle image breathing/parallax

### Level 2 --- Scroll

Triggered when sections enter the viewport.

Examples:

-   headings reveal upward
-   text fades in
-   cards stagger in
-   images translate slightly
-   section labels slide in
-   large typography reveals progressively

### Level 3 --- Interaction

Triggered by user interaction.

Examples:

-   project card tilt
-   image scale
-   magnetic CTA
-   pointer-following glow
-   animated arrow
-   navigation active indicator
-   hover metadata movement

### Level 4 --- Major transitions

Reserved for:

-   project modal opening
-   mobile menu opening
-   major hero entrance

These should feel cinematic but remain fast.

------------------------------------------------------------------------

# 4. Global Motion Rules

Use a consistent timing language.

Suggested values:

``` css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-smooth: cubic-bezier(0.2, 0.7, 0.2, 1);
--motion-fast: 180ms;
--motion-medium: 350ms;
--motion-slow: 700ms;
```

General rules:

-   microinteraction: \~150--250ms
-   hover: \~200--400ms
-   reveal: \~500--800ms
-   major entrance: \~700--1000ms
-   never make normal navigation feel slow
-   avoid infinite animations unless they are ambient and subtle

Use `transform` and `opacity` for most animation.

Avoid animating expensive layout properties unnecessarily.

------------------------------------------------------------------------

# 5. Accessibility / Reduced Motion

This is mandatory.

The existing site already has reduced-motion handling. Preserve it and
expand it.

For:

``` css
@media (prefers-reduced-motion: reduce)
```

disable or drastically reduce:

-   parallax
-   tilt
-   pointer-following effects
-   animated background movement
-   large entrance animations
-   smooth scrolling where appropriate
-   looping decorative animation

The website must remain completely usable without motion.

Do not hide content merely because animation is disabled.

Content should still appear immediately.

------------------------------------------------------------------------

# 6. Navigation Redesign

Current navigation:

-   logo
-   About
-   Projects
-   Contact
-   CSS mobile menu

Upgrade it into a **floating navigation system**.

## Desktop

The navigation should feel like a floating pill/panel rather than a
generic full-width header.

Concept:

``` text
       ┌─────────────────────────────────────────────┐
       │ </>       About   Projects   Contact        │
       └─────────────────────────────────────────────┘
```

Use:

-   dark translucent surface
-   subtle border
-   slight backdrop blur if appropriate
-   rounded but not overly rounded
-   small shadow/glow
-   fixed/sticky positioning
-   compact height

Do not make it enormous.

## Scroll behavior

At the top:

-   slightly more transparent
-   integrated into hero

After scrolling:

-   becomes more visible
-   slightly smaller/compact
-   subtle background
-   subtle shadow

Do not aggressively hide/show the nav.

## Active section

The existing JavaScript already observes sections.

Upgrade the active state with:

-   animated red underline
-   small sliding indicator
-   subtle text color change

The indicator should move smoothly between navigation items rather than
appearing/disappearing abruptly.

## Mobile

Keep the existing checkbox/menu concept if practical, but animate:

-   hamburger → X
-   menu panel opening
-   links stagger into view
-   background fade

Make sure the menu remains keyboard accessible.

------------------------------------------------------------------------

# 7. Hero Section --- Highest Priority

The hero should become the strongest part of the redesign.

Current content:

-   Software Engineering label
-   Building Solutions.
-   Code. Design. Innovate.
-   resume button
-   portrait
-   decorative code
-   capability row
-   Stay Curious / Keep Building

Preserve the content unless there is a strong reason to refine wording.

## Hero entrance sequence

On first load:

1.  small label fades/slides upward
2.  "Building" reveals
3.  "Solutions." reveals shortly after
4.  subtitle appears
5.  divider draws/reveals
6.  resume button appears
7.  portrait enters with slight movement
8.  code block appears
9.  capability row appears last

Use staggered animation.

Do not make everything animate simultaneously.

## Hero title

Make the title feel cinematic.

Possible approach:

Each line:

``` html
<span class="hero-title-line">
  <span class="hero-title-line__inner">Building</span>
</span>
```

The outer element clips the inner element.

Animate inner text:

``` css
transform: translateY(110%);
```

to:

``` css
transform: translateY(0);
```

This creates a clean editorial reveal.

Do not use a typewriter effect for the main headline.

------------------------------------------------------------------------

# 8. Hero Ambient Background

Add a subtle living background.

Possible layers:

1.  base dark background
2.  very subtle red radial glow
3.  subtle grid
4.  optional noise texture
5.  pointer-reactive glow

The pointer-reactive glow should follow the cursor very slowly.

Example concept:

``` css
.hero::before {
  background:
    radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(...),
      transparent 28%
    );
}
```

Update variables with `requestAnimationFrame`.

Important:

-   keep the effect subtle
-   do not create a giant red flashlight
-   disable it for touch devices
-   disable/reduce under reduced-motion

------------------------------------------------------------------------

# 9. Hero Portrait Interaction

Current portrait should remain central.

Add subtle depth.

On desktop pointer movement:

-   portrait moves a few pixels
-   decorative frame moves slightly differently
-   code block moves at a different speed

Example conceptual ranges:

``` text
mouse movement
    ↓
portrait:     ±8px
frame:        ±4px
code:         ±12px
background:   ±2px
```

This creates parallax without feeling like a game.

Do not rotate the portrait dramatically.

A tiny scale/translate effect is enough.

------------------------------------------------------------------------

# 10. Hero Code Block

The code block should feel alive.

Current code:

``` js
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
```

Keep the concept.

Add:

-   subtle typing/reveal on initial load
-   blinking cursor
-   slight opacity changes
-   subtle scan/highlight movement if tasteful

Do not make it actually type forever.

A short reveal is enough.

Example:

``` text
function createImpact() {
  let passion = true;
  let mindset = "growth";
  █
```

The code is decorative, so it should remain `aria-hidden`.

------------------------------------------------------------------------

# 11. Resume CTA

The resume button should feel tactile.

Interaction:

-   subtle magnetic movement toward pointer
-   background/outline transition
-   tiny upward movement
-   arrow/icon movement if an arrow is added

Keep the interaction restrained.

Do not make the button physically fly toward the cursor.

For mobile/touch:

-   use normal hover-independent styling
-   no magnetic effect

------------------------------------------------------------------------

# 12. Hero Capability Row

Current:

-   Development
-   Design
-   Innovation
-   Growth

Keep these.

Make them feel more like an animated system status row.

Possible treatment:

``` text
</> DEVELOPMENT     ▣ DESIGN     ✦ INNOVATION     ↗ GROWTH
```

On hero entrance:

-   reveal items one by one

On hover:

-   icon shifts
-   label brightens
-   small red indicator appears

Desktop:

-   subtle separators

Mobile:

-   maintain readability
-   avoid excessive horizontal overflow

------------------------------------------------------------------------

# 13. Scroll Indicator

Add a subtle scroll indicator near the bottom of the hero.

Concept:

``` text
SCROLL
   ↓
```

It can have a small animated line.

It should disappear naturally after the user scrolls.

Do not make it distracting.

------------------------------------------------------------------------

# 14. Section Reveal System

Create a reusable reveal system.

Use classes such as:

``` html
<div class="reveal">
```

and optionally:

``` html
<div class="reveal reveal--delay-1">
<div class="reveal reveal--delay-2">
```

Use IntersectionObserver.

Default:

``` css
.reveal {
  opacity: 0;
  transform: translateY(30px);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Add variations:

-   fade-up
-   fade-left
-   fade-right
-   scale
-   clip reveal

Do not make every element use a different animation.

Consistency matters.

------------------------------------------------------------------------

# 15. About Section

Current About structure is good.

Preserve:

-   Who I Am
-   About
-   portrait
-   social links
-   name
-   role
-   bio
-   Technical Skills
-   What Drives Me

## Header

Reveal:

``` text
WHO I AM
ABOUT
```

Use a stagger.

## Portrait

Add subtle:

-   parallax
-   image scale on hover
-   border movement
-   red accent glow

Avoid excessive effects.

## Bio

Reveal paragraph in a readable block.

Possible effect:

-   opacity
-   upward movement
-   slightly delayed line/block reveal

Do not animate every individual word unless implemented carefully and
accessibly.

## Skill pills

Current skill tags should become tactile.

Hover:

-   translate upward 2--4px
-   border changes to red
-   subtle background fill
-   tiny scale

On initial scroll:

-   stagger the skill pills

Keep them simple.

## "What Drives Me"

Make each statement feel like a small editorial list.

Possible:

``` text
01  Fast learner who thrives under pressure.
02  Passionate about building real solutions.
03  Cloud and software engineering...
```

Add animated numbering.

Numbers can shift to the accent color when visible/hovered.

------------------------------------------------------------------------

# 16. Subtle Background Grid

Consider adding a faint technical grid behind About/Projects.

It should be barely visible.

Example:

``` css
background-image:
  linear-gradient(...),
  linear-gradient(...);
background-size: 40px 40px;
```

Keep opacity extremely low.

The grid can slowly translate a few pixels during scroll, but this is
optional.

Do not make it look like a sci-fi dashboard.

------------------------------------------------------------------------

# 17. Projects Section --- Most Interactive Section

This is the biggest opportunity.

Current projects:

-   Taskly
-   Weather Dashboard
-   Personal Portfolio

Current functionality:

-   horizontal carousel
-   project cards
-   project modal
-   keyboard/focus support
-   project data in `script.js`

Preserve all existing functionality.

## Project card visual upgrade

Each card should feel like an interactive project preview rather than a
basic rectangular card.

Use:

-   image
-   project name
-   description
-   tags
-   "View Project"
-   subtle metadata

Add depth.

------------------------------------------------------------------------

# 18. Project Card Hover

Desktop card hover can use subtle 3D tilt.

Example:

``` text
rotateX: ±3deg
rotateY: ±3deg
translateY: -6px
```

Keep the range very small.

Use `requestAnimationFrame` or pointer events.

Do not create an exaggerated 3D effect.

## Card image

On hover:

-   image scale \~1.04--1.08
-   slight contrast/saturation increase
-   subtle red overlay/glow

The card itself should move slightly upward.

## Metadata

"View Project →"

On hover:

-   arrow moves right
-   text shifts slightly
-   accent becomes stronger

------------------------------------------------------------------------

# 19. Project Pointer Glow

Optional but recommended.

Inside the project card, create a very subtle radial glow following the
pointer.

Concept:

``` css
.project-card {
  --mouse-x: 50%;
  --mouse-y: 50%;
}

.project-card::before {
  background:
    radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(...),
      transparent 30%
    );
}
```

Use low opacity.

Disable on touch.

------------------------------------------------------------------------

# 20. Project Custom Cursor

On desktop only, consider a small custom cursor label while hovering
projects:

``` text
VIEW
```

or:

``` text
OPEN
```

The cursor should:

-   follow pointer smoothly
-   appear only over project cards
-   disappear elsewhere
-   not block clicks
-   remain small

Important:

-   do not replace the user's normal cursor globally
-   only use this interaction over projects
-   do not use it on mobile
-   respect reduced motion

If this complicates accessibility, skip it.

------------------------------------------------------------------------

# 21. Project Carousel

Preserve the current carousel.

Improve:

-   arrow appearance
-   smooth scrolling
-   active/visible card emphasis
-   edge fading
-   keyboard usability

The carousel should not feel like a generic slider plugin.

Desktop:

-   3 cards visible where possible

Mobile:

-   approximately 1 card
-   natural horizontal swipe

Arrow buttons:

-   compact
-   red accent on hover
-   subtle scale
-   animated arrow

------------------------------------------------------------------------

# 22. Project Modal

The existing modal is a strong foundation.

Do not remove its accessibility behavior.

Keep:

-   focus management
-   Escape close
-   backdrop close
-   focus trapping
-   dynamic project content
-   live/code/docs buttons

Upgrade the visual transition.

## Opening

Use:

1.  backdrop fade
2.  panel scale from \~0.96 to 1
3.  panel translateY from \~20px to 0
4.  title reveal
5.  content reveal
6.  action buttons stagger

Total duration should be roughly 400--700ms.

## Closing

Reverse quickly.

Do not leave long exit animations.

## Modal visual style

Use:

-   near-black panel
-   thin border
-   subtle red glow
-   large title
-   clear metadata
-   spacious content
-   strong CTA buttons

Avoid huge glassmorphism.

------------------------------------------------------------------------

# 23. Contact Section

Current contact section:

-   Email
-   LinkedIn
-   Based In
-   Open To Opportunities
-   Send Me An Email

Preserve the information.

The section should become a stronger closing statement.

## Main headline

Make:

``` text
OPEN TO OPPORTUNITIES.
```

or existing equivalent feel like a large editorial statement.

Reveal it on scroll.

Possible effect:

-   clip reveal
-   upward movement
-   slight letter spacing transition

## Contact cards

Hover:

-   card rises slightly
-   border becomes red
-   icon moves
-   subtle shadow

## Email CTA

Make the email button one of the strongest interactions on the page.

Hover:

-   background expands
-   arrow moves
-   button moves 2--3px
-   subtle magnetic effect on desktop

------------------------------------------------------------------------

# 24. Footer

Keep footer minimal.

Potential enhancement:

-   subtle top border animation
-   social icons hover
-   small red indicator
-   slight reveal

Do not over-design the footer.

------------------------------------------------------------------------

# 25. Cursor / Pointer Effects

Do not create a full-site custom cursor.

Instead use pointer effects selectively:

-   hero ambient glow
-   hero portrait parallax
-   project card tilt
-   project pointer glow
-   CTA magnetic movement

This keeps the site professional.

------------------------------------------------------------------------

# 26. Scroll Behavior

Use native:

``` css
html {
  scroll-behavior: smooth;
}
```

unless reduced motion is active.

If using a smooth-scroll library, only introduce it if native scrolling
is demonstrably insufficient.

Do not add Lenis just because it is popular.

The site should remain lightweight.

------------------------------------------------------------------------

# 27. Performance Requirements

This is a portfolio site and should remain fast.

Avoid:

-   huge JS animation loops
-   unnecessary libraries
-   large dependencies
-   continuously recalculating layout
-   expensive DOM operations on scroll
-   huge images loaded immediately
-   excessive box-shadow animations

For pointer movement:

-   use `requestAnimationFrame`
-   update CSS custom properties where possible

For scroll:

-   prefer IntersectionObserver
-   avoid heavy `scroll` handlers

Use passive listeners where appropriate.

------------------------------------------------------------------------

# 28. Responsive Requirements

Everything must work at:

-   320px
-   375px
-   414px
-   768px
-   1024px
-   1280px+
-   ultrawide desktop

Do not design desktop first and simply shrink it.

Pay special attention to:

-   hero title
-   portrait
-   navigation
-   project cards
-   modal
-   skill pills
-   contact cards

------------------------------------------------------------------------

# 29. Mobile Motion Rules

Mobile should still feel alive, but simpler.

Disable:

-   3D card tilt
-   magnetic buttons
-   pointer-following effects
-   custom cursor

Keep:

-   scroll reveals
-   card image zoom
-   button transitions
-   menu animation
-   modal transitions
-   subtle ambient animation

Touch devices should not receive hover-dependent content.

------------------------------------------------------------------------

# 30. Typography

Current typography uses:

-   Bebas Neue
-   Inter

Keep this pairing unless there is a compelling design reason to change
it.

Recommended hierarchy:

### Display

Bebas Neue

Use for:

-   hero title
-   section titles
-   major CTA statement

### Body

Inter

Use for:

-   paragraphs
-   navigation
-   metadata
-   project descriptions
-   buttons

Maintain strong contrast between display and body typography.

Do not introduce many fonts.

------------------------------------------------------------------------

# 31. Color System

Keep the current red/black identity.

Create/maintain CSS variables such as:

``` css
--color-bg
--color-bg-deep
--color-surface
--color-text
--color-muted
--color-border
--color-accent
--color-accent-dark
```

Add RGB variables where pointer/radial effects require alpha:

``` css
--color-accent-rgb
--color-bg-rgb
--color-text-rgb
```

Use the accent sparingly.

The page should still look premium if the red glow is removed.

------------------------------------------------------------------------

# 32. Layering / Z-Index

Create a clear stacking system.

Example:

``` css
--z-base: 1;
--z-content: 10;
--z-header: 100;
--z-overlay: 500;
--z-modal: 1000;
```

Avoid arbitrary values like:

``` css
z-index: 999999;
```

------------------------------------------------------------------------

# 33. HTML Semantics

Preserve semantic HTML.

Use:

-   `header`
-   `nav`
-   `main`
-   `section`
-   `article`
-   `footer`
-   buttons for interactive controls
-   anchors for navigation

Do not use clickable `<div>` elements when buttons/anchors are
appropriate.

Maintain accessible labels.

------------------------------------------------------------------------

# 34. Existing Accessibility Must Not Regress

The current repository already contains useful accessibility work.

Preserve:

-   skip link
-   semantic sections
-   `aria-label`
-   `aria-current`
-   modal `role="dialog"`
-   `aria-modal`
-   keyboard Escape behavior
-   focus restoration
-   focus trap
-   reduced-motion support
-   accessible mobile navigation

After redesign, test:

-   Tab navigation
-   Shift+Tab
-   Enter/Space activation
-   Escape
-   mobile menu
-   modal focus
-   screen-reader labels
-   reduced motion

------------------------------------------------------------------------

# 35. Suggested JavaScript Architecture

Do not turn `script.js` into one giant animation function.

Organize behavior into logical sections/functions.

Example:

``` js
// Navigation
initNavigation();

// Section reveal
initScrollReveals();

// Hero pointer interaction
initHeroParallax();

// Magnetic buttons
initMagneticElements();

// Project interactions
initProjectInteractions();

// Project carousel
initProjectCarousel();

// Project modal
initProjectModal();

// Reduced motion
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);
```

Functions can be named differently, but keep the architecture
understandable.

------------------------------------------------------------------------

# 36. Pointer Animation Architecture

Use a single animation loop if multiple pointer effects require
animation.

Avoid:

``` js
mousemove -> directly mutate many DOM elements
```

Prefer:

``` js
let pointer = {
  x: 0,
  y: 0
};

document.addEventListener("pointermove", (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
});

requestAnimationFrame(update);
```

Then update CSS variables/transforms once per frame.

------------------------------------------------------------------------

# 37. IntersectionObserver Architecture

Use one or a small number of observers instead of one observer per
element.

Example:

``` js
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15
  }
);
```

Once a reveal happens, it generally does not need to run again.

This keeps scrolling performant.

------------------------------------------------------------------------

# 38. Do Not Over-Animate

This is extremely important.

The finished website should NOT feel like:

-   a motion graphics demo
-   a gaming UI
-   a WebGL experiment
-   a template with every element flying around

The desired reaction is:

> "This site feels polished and alive."

Not:

> "This site has a lot of animations."

------------------------------------------------------------------------

# 39. Visual Rhythm

Use moments of stillness.

Example:

### Hero

High motion.

### About

Moderate motion.

### Projects

Highest interaction.

### Contact

Strong but slower motion.

### Footer

Almost static.

This creates hierarchy.

------------------------------------------------------------------------

# 40. Desired User Experience

When someone opens the website:

### 0--1 second

They immediately understand:

-   who Cedrick is
-   what he does
-   that the site is modern

### 1--3 seconds

The hero animation establishes personality.

### First scroll

The site begins responding to the user.

### About

Content reveals naturally.

### Projects

Interaction becomes stronger.

### Project modal

Feels like a premium transition rather than a browser alert.

### Contact

The site ends with a clear invitation to connect.

------------------------------------------------------------------------

# 41. Content Preservation

Do not casually rewrite or remove the user's content.

Preserve existing:

-   name
-   role
-   biography
-   projects
-   project descriptions
-   technical skills
-   social links
-   email
-   resume
-   project URLs

You may improve markup and presentation.

If copy improvements are clearly beneficial, keep them minimal and avoid
changing factual claims.

------------------------------------------------------------------------

# 42. Assets

Reuse the existing assets where appropriate:

``` text
assets/images/profile-picture.png
assets/images/taskly.png
assets/images/weatherDashboard.png
assets/images/portfolio-thumbnail.png
assets/images/favicon/...
assets/CEDRICK_LUNA_RESUME.pdf
```

Do not replace assets unnecessarily.

Optimize image rendering if needed.

Use:

``` html
loading="lazy"
```

for below-the-fold images where appropriate.

Do not lazy-load the main hero portrait if it causes visible loading
delay.

------------------------------------------------------------------------

# 43. Implementation Priority

Implement in this order.

## Phase 1 --- Foundation

1.  motion variables
2.  z-index system
3.  reveal classes
4.  reduced-motion system
5.  navigation redesign
6.  base hover transitions

## Phase 2 --- Hero

1.  staggered entrance
2.  headline reveal
3.  ambient glow
4.  portrait parallax
5.  code reveal/cursor
6.  CTA interaction
7.  capability row animation
8.  scroll indicator

## Phase 3 --- About

1.  scroll reveals
2.  portrait parallax
3.  skill pill interaction
4.  driver list animation
5.  subtle background detail

## Phase 4 --- Projects

1.  card visual redesign
2.  hover image movement
3.  tilt
4.  pointer glow
5.  metadata/arrow interaction
6.  carousel refinement
7.  modal transition
8.  optional custom project cursor

## Phase 5 --- Contact

1.  heading reveal
2.  card interactions
3.  CTA interaction
4.  ambient background

## Phase 6 --- Polish

1.  mobile behavior
2.  reduced motion
3.  keyboard accessibility
4.  performance
5.  spacing
6.  overflow bugs
7.  focus states
8.  final visual consistency

------------------------------------------------------------------------

# 44. Acceptance Criteria

The implementation is successful when:

-   The website feels noticeably more alive than the current version.
-   The design remains simple and professional.
-   Motion has a consistent visual language.
-   Hero is the strongest visual section.
-   Projects are the strongest interactive section.
-   Navigation feels modern and responsive.
-   Scroll reveals work smoothly.
-   Project cards feel tactile.
-   Project modal feels polished.
-   Contact feels like a strong ending.
-   Mobile remains clean.
-   Reduced-motion users receive the same content/functionality without
    unnecessary animation.
-   Keyboard users can navigate everything.
-   No major layout shift occurs during animation.
-   No unnecessary framework or heavy dependency is introduced.
-   Existing project links and functionality remain intact.
-   Page performance remains strong.

------------------------------------------------------------------------

# 45. Final Design Test

Before considering the redesign complete, ask:

### Does it feel alive?

Yes, but subtly.

### Does it feel simple?

Yes.

### Does the animation communicate hierarchy?

It should.

### Does the site still feel like a software engineer's portfolio?

Yes.

### Does anything feel like animation for animation's sake?

If yes, remove it.

### Is the red accent still special?

It should be used as an accent, not as the entire interface.

### Can the user focus on Cedrick's work?

Always.

------------------------------------------------------------------------

# Codex Instruction

Treat this document as the **design and interaction specification**, not
as a request to blindly implement every effect.

You are expected to inspect the existing code first, preserve working
functionality, and then implement the redesign incrementally.

Prefer the simplest implementation that produces the intended visual
result.

Do not introduce a framework merely to implement animations.

Do not delete existing accessibility behavior.

Do not remove project functionality.

Do not add unnecessary dependencies.

If an interaction becomes visually noisy, simplify it.

The final objective is:

> **A minimal, premium, technical portfolio that feels alive through
> purposeful motion and interaction.**
