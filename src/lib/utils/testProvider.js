import React from 'react';
import PropTypes from 'prop-types';
import {Provider as LocaleProvider} from 'lib/features/locale/withLocaleContext';
import {Provider as ThemeProvider} from 'lib/features/theme/withTheme';
import {Provider as ModalProvider} from 'lib/features/modal/withModalProvider';
import {Provider as DatepickerProvider} from 'lib/features/datepicker/withDatepickerProvider';

export const DatepickerMockProvider = props => (
  <LocaleProvider {...props}>
    <ThemeProvider>
      <DatepickerProvider>{props.children}</DatepickerProvider>
    </ThemeProvider>
  </LocaleProvider>
);

export const InputMockProvider = props => (
  <LocaleProvider {...props}>
    <ThemeProvider>
      <ModalProvider>
        <DatepickerProvider>{props.children}</DatepickerProvider>
      </ModalProvider>
    </ThemeProvider>
  </LocaleProvider>
);

DatepickerMockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

InputMockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
