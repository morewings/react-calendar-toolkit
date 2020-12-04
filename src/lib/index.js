import compose from 'lib/utils/compose';
import {withModalProvider} from 'lib/features/modal';
import {withDatepickerProvider} from 'lib/features/datepicker';
import Datepicker from 'lib/components/Datepicker';
import DatepickerInput from 'lib/components/DatepickerInput';
import {useFormatDate, withLocaleContext} from 'lib/features/locale';
import {withTheme, useTheme, useThemeContext} from 'lib/features/theme';
import useOnClickOutside from 'lib/utils/useOnClickOutside';
import defaultTheme from 'lib/utils/defaultTheme';
import useScrollIntoView from 'lib/utils/scrollIntoView';

const WrappedDatepickerInput = compose(
  withDatepickerProvider,
  withModalProvider,
  withLocaleContext,
  withTheme
)(DatepickerInput);

const WrappedDatepicker = compose(
  withDatepickerProvider,
  withLocaleContext,
  withTheme
)(Datepicker);

export {
  useFormatDate,
  useTheme,
  useThemeContext,
  defaultTheme,
  useScrollIntoView,
  useOnClickOutside,
  WrappedDatepickerInput as DatepickerInput,
  WrappedDatepicker as Datepicker,
};

export default WrappedDatepicker;
