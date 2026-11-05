# Responsive: one design, one component, every size

Normative rules for viewport responsiveness and fluid layout.

## Intrinsic Fluid Layout

The design is fluid by construction:
* **Grids:** `repeat(auto-fit, minmax(<min-width>, 1fr))` — cards reflow smoothly across tablet and mobile widths.
* **Shell:** Max-width 1320px with symmetric padding (`px-4 sm:px-8`).
* **Header & Chip rows:** Rely on `flex-wrap` and intrinsic space distribution.

## Zero Dual-DOM Duplication

**Strictly Forbidden:**
* Rendering dual desktop and mobile trees with CSS visibility toggles:
  `<div className="hidden-mobile">...</div><div className="show-mobile">...</div>`
* This doubles DOM size, duplicates navigation elements, and causes accessibility / screen reader issues.

**Required:**
* Branch the *container* styling using responsive utility classes (`sm:`, `md:`, `lg:`), preserving a single DOM tree of children.

## Fluid Hero Typography

The hero title must scale smoothly across viewport sizes using CSS `clamp()`:
```css
font-size: clamp(2.5rem, 5.5vw, 5rem);
line-height: 1.1;
```

## Viewport Reference Widths

Verify all changes at:
* **390px** (Modern standard smartphone)
* **430px** (Large smartphone)
* **768px** (Tablet portrait)
* **1024px** (Tablet landscape / small laptop)
* **1440px** (Desktop widescreen)
