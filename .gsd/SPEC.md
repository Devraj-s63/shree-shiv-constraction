# SPEC.md — Project Specification

> **Status**: `FINALIZED`

## Vision
A high-impact, authentic digital presence for **Shree Shiv Construction** embodying an unapologetically industrial, structural, and editorial aesthetic. Built to showcase civil engineering capability, heavy construction infrastructure, project integrity, and equipment scale with architectural clarity.

## Design Rules & Strict Aesthetic Constraints
- **Palette**:
  - Primary Background: Warm off-white (`#F4F3EF` / `#EDECE8` — never pure white `#FFFFFF`).
  - Steel Dark & Ink: Deep steel blue (`#1A242F` / `#16202B`) & Steel Gray (`#3E4A56` / `#566270`).
  - Accent / Signal: Safety amber (`#D97706` / `#C26700` — high contrast, industrial).
  - Explicit Ban: Never use neon, pastel, or rainbow colors.
- **Surfaces & Borders**:
  - Sharp corners (`border-radius: 0px` globally).
  - High-contrast hairline or solid borders (`1px` or `2px` solid).
  - Strictly **no drop shadows**, **no gradients**, **no liquid glass/glassmorphism**, **no terminal windows**, **no colored left stripes**, **no radial orbs or dot grids**.
- **Typography**:
  - Display / Headings: `Archivo` (weights: 700/800/900, uppercase industrial tracking where appropriate).
  - Body / Subtext: `Public Sans` (weights: 400/500/600).
  - Explicit Ban: Never use Inter, Geist, or Space Grotesk.
- **Iconography**:
  - 100% custom inline SVG icons only.
  - Strictly no Lucide, FontAwesome, or external icon font libraries.
- **Layout & Structure**:
  - Asymmetric and editorial grid systems with blueprint/ledger lines.
  - Strictly banned: No 3-cards-in-a-row, no bento grids.
- **Motion & Dynamics**:
  - Limited strictly to subtle scroll reveals and mechanical count-up statistics.
  - Strictly banned: No hover floating/bounce animations, no animated bouncing arrows.
- **Tone & Copy Constraints**:
  - Grounded, matter-of-fact industrial tone.
  - Zero emojis.
  - Zero em dashes (`—`).
  - Never use phrasing like "it's not X, it's Y".
- **Imagery & Proof**:
  - Authentic field, civil work, machinery, fabrication, and site photography only.
  - No synthetic stock filler; no invented testimonials.

## Goals
1. Establish a distinctive, authoritative web presence for Shree Shiv Construction adhering 100% to the specified industrial editorial design language.
2. Structure capabilities (Civil Infrastructure, Structural Engineering, Commercial Construction, Equipment & Fleet) with asymmetric editorial breakdowns.
3. Feature real project ledger, technical specifications, execution process, safety records, and direct inquiry/tendering contact channels.
4. Ensure instant load performance, semantic HTML5 structure, responsive layout across all viewports, and clean maintainable code.

## Non-Goals (Out of Scope)
- No whimsical consumer branding or tech-startup style landing pages.
- No client review carousel or fabricated 5-star rating widgets without verified real client inputs.
- No noisy animated canvas backgrounds, particles, or cursor-trailing effects.

## Target Audience
- Government and municipal procurement officers.
- Commercial developers, corporate infrastructure planners, and industrial site directors.
- Subcontractors, suppliers, and prospective engineering talent.

## Constraints
- Pure, clean vanilla HTML, modular modern CSS, and lightweight vanilla JavaScript.
- Zero reliance on bloated utility frameworks that conflict with custom design specs.
- Strictly adhere to all design, typography, motion, and copy rules.

## Success Criteria
- [ ] 100% compliance with all design constraints (colors, fonts, zero radius, no shadows, no gradients, no emojis, no em dashes).
- [ ] Asymmetric layout validated across desktop, tablet, and mobile displays.
- [ ] Validated Lighthouse scores for Performance, Accessibility, and SEO.
