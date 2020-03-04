const baseColor = '#43a047';
const gray = 'rgba(0, 0, 0, 0.38)';

export default {
  /** Set font for datepicker */
  '--fontPrimary': 'Helvetica Neue',
  /** Font, which is applied, if --fontPrimary is not available */
  '--fontSecondary': 'Arial',
  /** Fallback font if two previous are unavailable */
  '--fontFallback': 'sans-serif',
  '--fontSize': '16px',
  /** Applied to the title */
  '--fontSizeSmall': '12px',
  /** Applied to the header text */
  '--fontSizeBig': '36px',
  /** Set inner width */
  '--calendarWidth': '280px',
  /** Calculate total width */
  '--datePickerWidth': 'calc(var(--calendarWidth) + var(--innerPadding) * 2)',
  '--calendarHeight': '247px',
  /** Set padding between elements */
  '--innerPadding': '16px',
  /** Day, month, year entries height */
  '--entryHeight': '38px',
  '--datepickerBorderRadius': '4px',
  '--entryBorderRadius': '4px',
  /** Height of fieldset input */
  '--inputHeight': '25px',
  /** Base color for text */
  '--textColor': 'black',
  '--headerBgColor': baseColor,
  '--weekendTextColor': 'red',
  '--headerTextColor': 'white',
  '--borderColor': gray,
  '--modalBgColor': gray,
  '--weekDayColor': gray,
  '--entryHoverColor': 'rgba(0, 0, 0, 0.08)',
  '--entrySelectedColor': baseColor,
  '--entryHighlightColor': 'lightblue',
};
