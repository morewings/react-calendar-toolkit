const baseColor = '#43a047';
const gray = 'rgba(0, 0, 0, 0.38)';
const borderRadius = '4px';

const defaultTheme = {
  /** Set font for datepicker */
  fontPrimary: 'Helvetica Neue',
  /** Font, which is applied, if --fontPrimary is not available */
  fontSecondary: 'Arial',
  /** Fallback font if two previous are unavailable */
  fontFallback: 'sans-serif',
  fontSize: '14px',
  fontWeight: '400',
  /** Applied to the title */
  fontSizeSmall: '10px',
  /** Applied to the header text */
  fontSizeBig: '24px',
  /** Set inner width */
  calendarWidth: '240px',
  /** Calculate total width */
  datePickerWidth: 'calc(var(--calendarWidth) + var(--innerPadding) * 2)',
  selectorHeight: '36px',
  calendarHeight: '200px',
  /** Set padding between elements */
  innerPadding: '12px',
  /** Day, month, year entries height */
  entryHeight: '32px',
  entryMargin: '1px',
  datepickerBorderRadius: borderRadius,
  entryBorderRadius: borderRadius,
  /** Background color of Calendar */
  bgColor: 'white',
  /** Base color for text */
  textColor: 'black',
  headerBgColor: baseColor,
  weekendTextColor: 'red',
  headerTextColor: 'white',
  borderColor: gray,
  modalBgColor: gray,
  weekDayColor: gray,
  entryHoverColor: 'rgba(0, 0, 0, 0.08)',
  entrySelectedColor: baseColor,
  entryHighlightColor: 'lightblue',
  inputWidth: '90px',
  inputPadding: '8px',
  inputBorderRadius: borderRadius,
  inputBorderColor: gray,
  inputHighlightColor: 'lightblue',
};

export default defaultTheme;
