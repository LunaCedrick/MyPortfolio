---
name: hero-image-blending
description: Improve the visual integration of the hero profile image so it feels cinematic, atmospheric, and naturally embedded into the hero environment instead of looking like a pasted PNG cutout. This skill ONLY applies to the Hero section. DO NOT apply these effects to the About section image, project thumbnails, or other images. The About section uses the same image asset and MUST remain untouched.
---

## Visual Output Basis

Reference image:
assets/images/image-blending-output-basis.png

This image represents the TARGET visual quality and atmosphere
for the hero image blending.

Use it as the visual benchmark for:
- environmental blending
- cinematic atmosphere
- glow intensity
- fade integration
- depth layering
- image softness
- lighting balance

IMPORTANT:
The goal is NOT to redesign the hero section.

The goal is ONLY to make the existing hero profile image
feel naturally integrated into the environment similar to
the reference image.

DO NOT:
- copy the layout exactly
- modify typography structure
- redesign spacing
- replace the existing composition

ONLY replicate the image blending and atmospheric integration style.

---

## Reference Usage Rules

The reference image MUST influence ONLY:
- hero image blending
- environmental effects around the hero image
- atmospheric depth
- cinematic integration

The reference image MUST NOT influence:
- About section
- Projects section
- Contact section
- global image styles
- global overlays
- typography system

---

## Image Asset Protection Rules

The asset:
profile-picture.png

is shared across multiple sections.

DO NOT:
- directly edit the image asset
- replace the image globally
- apply global filters
- modify shared image classes

All visual changes must happen ONLY through hero-specific CSS.

The About section must preserve the original clean image appearance.

## Goal
Improve the visual integration of the hero profile image so it
feels cinematic, atmospheric, and naturally embedded into the
hero environment instead of looking like a pasted PNG cutout.

This skill ONLY applies to the Hero section.

DO NOT apply these effects to:
- About section image
- Project thumbnails
- Other images
- Global image styles

The About section uses the same image asset and MUST remain untouched.

---

## Scope Restriction

STRICT RULE:
All modifications must target ONLY the hero section image.

Allowed selectors:
- .hero__image
- .hero__image img
- .hero__visual
- hero-specific pseudo elements

DO NOT:
- modify global img styles
- modify shared image classes
- modify profile-picture.png directly
- apply effects globally
- affect the About section image

Effects must remain isolated to the Hero section only.

---

## Visual Objective

The hero image should feel:
- cinematic
- atmospheric
- premium
- naturally blended
- integrated into the environment

Avoid:
- pasted PNG look
- sticker cutout appearance
- harsh edges
- flat lighting
- abrupt image ending

The effect should feel subtle and professional.

---

## Required Visual Improvements

### 1. Background Glow Integration

Add a subtle crimson radial glow behind the hero image.

Purpose:
- blend the subject into the environment
- create depth separation
- support the dark-tech aesthetic

Style direction:
- soft
- blurred
- atmospheric
- low opacity

Use:
- radial gradients
- blur filters
- pseudo elements

DO NOT:
- create neon glow
- use overpowering brightness

---

### 2. Bottom Fade Integration

Fade the lower portion of the hero image naturally into the
background using masking or gradient fade techniques.

Purpose:
- remove hard cutout appearance
- create cinematic blending
- soften image ending

Preferred:
- CSS mask-image
- linear gradient fade

DO NOT:
- crop the image harshly
- create visible fade lines

---

### 3. Environmental Atmosphere

Add subtle environmental overlays around the hero image area.

Allowed:
- dark crimson gradients
- atmospheric overlays
- soft shadows
- subtle depth layering

DO NOT:
- add clutter
- add strong visual noise
- affect text readability

Effects must remain subtle.

---

### 4. Lighting Consistency

Adjust the hero image slightly so it matches the darker
environment of the hero section.

Allowed adjustments:
- slight brightness reduction
- slight contrast enhancement
- subtle saturation reduction

The image should still remain clear and professional.

DO NOT:
- over-darken the face
- destroy natural skin tones
- apply dramatic filters

---

### 5. Edge Softening

Soften the transition between the image and the background.

Allowed:
- soft shadow blending
- subtle edge diffusion
- atmospheric shadowing

Goal:
remove the "sticker pasted on background" appearance.

---

## Technical Rules

All effects must:
- remain performant
- use CSS only
- avoid heavy filters
- preserve responsiveness
- preserve image quality

DO NOT:
- replace the image
- edit the image asset
- generate canvas effects
- use JavaScript for blending

---

## Responsive Rules

Effects must scale properly on:
- desktop
- tablet
- mobile

On smaller screens:
- reduce overlay intensity
- preserve readability
- prevent visual clutter

---

## Important Preservation Rules

Preserve:
- existing hero layout
- typography
- spacing
- positioning
- navigation
- responsive structure

This skill is ONLY for improving image-environment blending.

Do NOT redesign the hero section.

---

## AI Assistant Instructions

When applying this skill:
1. Modify ONLY hero image related styles
2. Keep effects subtle and cinematic
3. Preserve the dark-tech aesthetic
4. Avoid global CSS leakage
5. Avoid changing unrelated sections
6. Preserve About section image appearance
7. Reuse existing hero structure

Before finishing:
- verify About image remains untouched
- verify no global img selector was modified
- verify hero responsiveness still works

---

## What to Ask Codex

"Using AGENTS.md and skill-hero-image-blending.md,
improve the hero image blending and environmental integration.

Modify ONLY the hero section image styling.
Do not affect the About section image or global image styles.

Keep the effect cinematic, subtle, and professional.
Preserve the current layout and responsiveness."