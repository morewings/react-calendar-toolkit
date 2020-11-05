declare module 'react-calendar-toolkit' {
  import * as React from 'react';

  type DatePickerMinPrecision = 'year' | 'month' | 'day';

  type InputModes = 'popover' | 'modal';

  type DefaultTheme = Record<string, string>;

  interface DatePickerDateFnsLocale {}

  interface DateMatcherInterface {
    isWeekend: boolean;
    precision: DatePickerMinPrecision;
    date: Date;
  }

  interface DatePickerPropsShared {
    initialDate?: Date;
    today?: Date;
    startDate?: Date;
    endDate?: Date;
    showHeader?: boolean;
    title?: string;
    minPrecision?: DatePickerMinPrecision;
    wrapWith?: React.ReactNode;
    renderDayAs?: React.ReactNode;
    wrapDaysWith?: React.ReactNode;
    renderMonthAs?: React.ReactNode;
    wrapMonthWith?: React.ReactNode;
    renderYearAs?: React.ReactNode;
    wrapYearWith?: React.ReactNode;
    renderWeekDayAs?: React.ReactNode;
    wrapWeekDaysWith?: React.ReactNode;
    renderHeaderAs?: React.ReactNode;
    renderSelectorAs?: React.ReactNode;
    disableDate?: (param: DateMatcherInterface) => boolean;
    highlightDate?: (param: DateMatcherInterface) => boolean;
    highlightWeekends?: boolean;
  }

  interface DatePickerProps extends DatePickerPropsShared {
    onDateSet: (date: Date) => any;
    dateFnsLocale?: DatePickerDateFnsLocale;
    theme?: object;
  }

  interface InputProps {
    onDateSet: (date: Date) => any;
    dateFnsLocale?: DatePickerDateFnsLocale;
    theme?: object;
    mode?: InputModes;
    hideOnSelect?: boolean;
    renderInputAs?: React.ReactNode;
    renderDatePickerAs?: React.ReactNode;
    wrapPopoverWith?: React.ReactNode;
    wrapModalWith?: React.ReactNode;
    formatPattern?: string;
    datePickerProps?: DatePickerPropsShared;
  }

  export const DatePicker: React.FC<DatePickerProps>;

  export const DatePickerInput: React.FC<InputProps>;

  export function useFormatDate(): (pattern: string, date: Date) => string;

  export function useThemePostCSS(
    defaultTheme?: DefaultTheme
  ): [Object, Function];

  export function useScrollIntoView(
    ref: React.RefObject<HTMLInputElement>,
    containerSelector: string,
    condition: boolean
  ): void;

  export function useOnClickOutside(
    ref: React.RefObject<HTMLInputElement>,
    handler: Function
  ): void;

  export function useThemeContext(): object;

  export function setCSSVariable(
    element: HTMLElement,
    variableName: string,
    value: string
  ): void;

  export function getCSSVariable(
    element: HTMLElement,
    variableName: string
  ): string;

  export function removeCSSVariable(
    element: HTMLElement,
    variableName: string
  ): void;

  export const defaultTheme: DefaultTheme;

  export default DatePicker;
}
