export enum BreakPoints {
  phone = 320,
  tablet = 768,
  medium = 1024,
  wide = 1200,
  huge = 1440,
}

export const MediaQueries = {
  BIGGER_THAN_PHONE: `@media only screen and (min-width: ${BreakPoints.phone}px)`,
  BIGGER_THAN_TABLET: `@media only screen and (min-width: ${BreakPoints.tablet}px)`,
  BIGGER_THAN_MEDIUM: `@media only screen and (min-width: ${BreakPoints.medium}px)`,
  BIGGER_THAN_WIDE: `@media only screen and (min-width: ${BreakPoints.wide}px)`,
  BIGGER_THAN_HUGE: `@media only screen and (min-width: ${BreakPoints.huge}px)`,
};
