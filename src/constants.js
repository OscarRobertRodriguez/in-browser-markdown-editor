const BREAKPOINTS = {
  tabletMin: 760,
  laptopMin: 1100,
  desktopMin: 1440,
}
export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
}
