/**
 * Builds aria-label attribute
 * @param {string} formattedDate - date value to display
 * @param {boolean} isCurrent - flag, showing if this entry is the same as now
 * @param {boolean} isSelected - flag, showing if this entry is selected
 * @param {boolean} isHighlighted - flag, showing if this entry is highlighted
 * @return {string} Result of check
 */
const getAriaLabel = (formattedDate, isCurrent, isSelected, isHighlighted) =>
  `${formattedDate} ${isCurrent ? 'is current' : ''} ${
    isSelected ? 'is selected' : ''
  } ${isHighlighted ? 'is highlighted' : ''}`;

export default getAriaLabel;
