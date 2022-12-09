import {css} from 'lit';
export const styles = css`:host(:is([on=dark])) { --context: dark; }
:host(:is([on=light])) { --context: light; }
:host(:is([on=saturated])) { --context: saturated; }

/**
 * It's important for \`color-palette\` to take precedence over \`on\`
 * when setting \`--context\`, because a \`dark\` card that's on a \`light\`
 * background must create a new \`dark\` context for its descendents
 */

:host(:is([color-palette=darker],[color-palette=darkest])) {
  --context: dark;
  --rh-context-text: var(--rh-context-dark-color-text, #fff);
  --rh-context-text-muted: var(--rh-context-dark-color-text-muted, #d2d2d2);
  --rh-context-link: var(--rh-context-dark-color-text-link, #73bcf7);
  --rh-context-link-hover: var(--rh-context-dark-color-text-link-hover, #bee1f4);
  --rh-context-link-focus: var(--rh-context-dark-color-text-link-focus, #bee1f4);
  --rh-context-link-visited: var(--rh-context-dark-color-text-link-visited, #a18fff);
  --rh-context-link-visited-hover: var(--rh-context-dark-color-text-link-visited-hover, #cbc1ff);
  /* --rh-context-link-decoration: var(--rh-theme--link-decoration--on-dark, none); */
  /* --rh-context-link-decoration-hover: var(--rh-theme--link-decoration-hover--on-dark, underline); */
  /* --rh-context-link-decoration-focus: var(--rh-theme--link-decoration-focus--on-dark, underline); */
  /* --rh-context-link-decoration--visited: var(--rh-theme--link-decoration--visited--on-dark, none); */
}

:host(:is([color-palette=lighter],[color-palette=lightest],[color-palette=base])) {
  --context: light;
  --rh-context-text: var(--rh-context-light-color-text, #151515);
  --rh-context-text-muted: var(--rh-context-light-color-text-muted, #6a6e73);
  --rh-context-link: var(--rh-context-light-color-text-link, #06c);
  --rh-context-link-hover: var(--rh-context-light-color-text-link-hover, #004080);
  --rh-context-link-focus: var(--rh-context-light-color-text-link-focus, #004080);
  --rh-context-link-visited: var(--rh-context-light-color-text-link-visited, #6753ac);
  --rh-context-link-visited-hover: var(--rh-context-light-color-text-link-visited-hover, #1f0066);
  /* --rh-context-link-decoration: var(--rh-theme--link-decoration, none); */
  /* --rh-context-link-decoration-hover: var(--rh-theme--link-decoration-hover, underline); */
  /* --rh-context-link-decoration-focus: var(--rh-theme--link-decoration-focus, underline); */
  /* --rh-context-link-decoration--visited: var(--rh-theme--link-decoration--visited, none); */
}

/* FIXME: Saturated colours TBD */
/* :host(:is([color-palette=accent],[color-palette=complement],[color-palette=saturated])) { */
/*   --context: saturated; */
/*   --rh-context-text: var(--rh-theme--color--text--on-saturated, #fff); */
/*   --rh-context-text-muted: var(--rh-theme--color--text-muted--on-saturated, #d2d2d2); */
/*   --rh-context-link: var(--rh-theme--color--link-on-saturated, #fff); */
/*   --rh-context-link-hover: var(--rh-theme--color--link-hover--on-saturated, #fafafa); */
/*   --rh-context-link-focus: var(--rh-theme--color--link-focus--on-saturated, #fafafa); */
/*   --rh-context-link-visited: var(--rh-theme--color--link-visited--on-saturated, #d2d2d2); */
/*   --rh-context-link-decoration: var(--rh-theme--link-decoration--on-saturated, underline); */
/*   --rh-context-link-decoration-hover: var(--rh-theme--link-decoration-hover--on-saturated, underline); */
/*   --rh-context-link-decoration-focus: var(--rh-theme--link-decoration-focus--on-saturated, underline); */
/*   --rh-context-link-decoration--visited: var(--rh-theme--link-decoration--visited--on-saturated, underline); */
/* } */

:host(:is([color-palette=lightest])) {
  --rh-context-background-color: var(--rh-color-surface-lighest, #fff);
}

:host(:is([color-palette=lighter])) {
  --rh-context-background-color: var(--rh-color-surface-lighter, #f5f5f5);
}

:host(:is([color-palette=base])) {
  --rh-context-background-color: var(--rh-color-surface-lighest, #fff);
}

:host(:is([color-palette=darker])) {
  --rh-context-background-color: var(--rh-color-surface-darker, #212427);
}

:host(:is([color-palette=darkest])) {
  --rh-context-background-color: var(--rh-color-surface-darkest, #151515);
}

/* FIXME: Saturated colors TBD */
/* :host(:is([color-palette=complement])) { */
/*   --rh-context-background-color: var(--rh-color-surface-complement, #004368); */
/* } */
/**/
/* :host(:is([color-palette=accent])) { */
/*   --rh-context-background-color: var(--rh-color-surface-accent, #00659c); */
/* } */

/* QUESTION: should be specified per component? */
/* :host(:is([color-palette])) { */
/*   background-color: var(--rh-context-background-color, var(--rh-color-surface-base)); */
/* } */

`;
export default styles;