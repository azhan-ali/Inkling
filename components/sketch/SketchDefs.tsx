/**
 * SketchDefs — global SVG <defs> mounted once in the root layout.
 *
 * Provides reusable filters for the hand-drawn aesthetic. Apply with
 * `filter: url(#wobble)` or via the `.wobble` / `.wobble-strong` CSS classes.
 */
export function SketchDefs() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: "absolute", pointerEvents: "none" }}
    >
      <defs>
        <filter id="wobble">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="2"
            seed="3"
          />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
        <filter id="wobble-strong">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="3"
            seed="7"
          />
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
        <filter id="roughen">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.08"
            numOctaves="2"
            seed="11"
          />
          <feDisplacementMap in="SourceGraphic" scale="1.2" />
        </filter>
      </defs>
    </svg>
  );
}
