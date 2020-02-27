declare module 'react-calendar-toolkit' {
  import * as React from 'react';

  export type DatePickerMinPrecision = 'year' | 'month' | 'day';

  export type DatePickerWrapWith = React.ReactNode | string;

  export interface DatePickerDateFnsLocale {}

  export type DateMatcherInterface = {
    isWeekend: boolean;
    precision: DatePickerMinPrecision;
    date: Date;
  }

  export interface DatePickerProps {
    /**
     * Set initial selected date when component renders.
     */
    initialDate?: Date;
    /**
     * Set today date.
     */
    today?: Date;
    /**
     * Set start date of calendar.
     */
    startDate?: Date;
    /**
     * Set end date of calendar.
     */
    endDate?: Date;
    /**
     * Flag to show or hide header.
     */
    showHeader?: boolean;
    /**
     * Set title of calendar show in Header.
     */
    title?: string;
    /**
     * Set minimum precision (measuring unit) of calendar. Possible values: 'day', 'month', 'year'.
     */
    minPrecision?: DatePickerMinPrecision;
    /**
     * Callback when user clicks selected date
     */
    onDateSet: (date: Date) => any;
    /**
     * Define wrapper for the calendar. Can be node, React element or className applied to wrapping div.
     */
    wrapWith?: DatePickerWrapWith;
    /**
     * Define component which renders __day__ entry.
     */
    renderDayAs?: React.ReactNode;
    /**
     * Define component which wraps __day__ entry.
     */
    wrapDaysWith?: React.ReactNode;
    /**
     * Define component which renders __month__ entry.
     */
    renderMonthAs?: React.ReactNode;
    /**
     * Define component which wraps __month__ entry.
     */
    wrapMonthWith?: React.ReactNode;
    /**
     * Define component which renders __year__ entry.
     */
    renderYearAs?: React.ReactNode;
    /**
     * Define component which wraps __year__ entry.
     */
    wrapYearWith?: React.ReactNode;
    /**
     * Define component which renders __week day__ entry.
     */
    renderWeekDayAs?: React.ReactNode;
    /**
     * Define component which wraps __week day__ entry.
     */
    wrapWeekDaysWith?: React.ReactNode;
    /**
     * Define component which renders __Header__.
     */
    renderHeaderAs?: React.ReactNode;
    /**
     * Define component which renders __Precision selector__.
     */
    renderSelectorAs?: React.ReactNode;
    /**
     * Function which decides if date should be __disabled__. It gets `isWeekend`, `precision` and `date` and outputs Boolean.
     * `({isWeekend, precision, date}) => false`
     */
    disableDate?: (param: DateMatcherInterface) => boolean;
    /**
     * Function which decides if date should be __highlighted__. It gets `isWeekend`, `precision` and `date` and outputs Boolean.
     * `({isWeekend, precision, date}) => false`
     */
    highlightDate?: (param: DateMatcherInterface) => boolean;
    /**
     * Flag to enable __weekend highlight__ prop.
     */
    highlightWeekends?: boolean;
    /**
     * date-fns locale object. Defaults to english
     */
    dateFnsLocale?: DatePickerDateFnsLocale;
  }

  const DatePicker: React.FC<DatePickerProps>;

  export default DatePicker;
}
