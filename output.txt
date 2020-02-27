declare module 'moduleName' {
    import * as React from 'react';

    export type DatePickerMinPrecision = "year" | "month" | "day";

    export type DatePickerWrapWith = any | string;

    export interface DatePickerDateFnsLocale {
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
        onDateSet: (...args: any[])=>any;
        /**
         * Define wrapper for the calendar. Can be node, React element or className applied to wrapping div.
         */
        wrapWith?: DatePickerWrapWith;
        /**
         * Define component which renders __day__ entry.
         */
        renderDayAs?: any;
        /**
         * Define component which wraps __day__ entry.
         */
        wrapDaysWith?: any;
        /**
         * Define component which renders __month__ entry.
         */
        renderMonthAs?: any;
        /**
         * Define component which wraps __month__ entry.
         */
        wrapMonthWith?: any;
        /**
         * Define component which renders __year__ entry.
         */
        renderYearAs?: any;
        /**
         * Define component which wraps __year__ entry.
         */
        wrapYearWith?: any;
        /**
         * Define component which renders __week day__ entry.
         */
        renderWeekDayAs?: any;
        /**
         * Define component which wraps __week day__ entry.
         */
        wrapWeekDaysWith?: any;
        /**
         * Define component which renders __Header__.
         */
        renderHeaderAs?: any;
        /**
         * Define component which renders __Precision selector__.
         */
        renderSelectorAs?: any;
        /**
         * Function which decides if date should be __disabled__. It gets `isWeekend`, `precision` and `date` and outputs Boolean.
         * `({isWeekend, precision, date}) => false`
         */
        disableDate?: (...args: any[])=>any;
        /**
         * Function which decides if date should be __highlighted__. It gets `isWeekend`, `precision` and `date` and outputs Boolean.
         * `({isWeekend, precision, date}) => false`
         */
        highlightDate?: (...args: any[])=>any;
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

