const defaultTheme = {
  gray: 'rgba(0, 0, 0, 0.38)',
  baseColor: '#43a047',
  borderRadius: '4px',
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
  datepickerBorderRadius: 'var(--borderRadius)',
  entryBorderRadius: 'var(--borderRadius)',
  /** Background color of Calendar */
  bgColor: 'white',
  /** Base color for text */
  textColor: 'black',
  headerBgColor: 'var(--baseColor)',
  weekendTextColor: 'red',
  headerTextColor: 'white',
  borderColor: 'var(--gray)',
  modalBgColor: 'var(--gray)',
  weekDayColor: 'var(--gray)',
  entryHoverColor: 'rgba(0, 0, 0, 0.08)',
  entrySelectedColor: 'var(--baseColor)',
  entryHighlightColor: 'lightblue',
  inputWidth: '90px',
  inputPadding: '8px',
  inputBorderRadius: 'var(--borderRadius)',
  inputBorderColor: 'var(--gray)',
  inputHighlightColor: 'lightblue',
};

export default defaultTheme;
