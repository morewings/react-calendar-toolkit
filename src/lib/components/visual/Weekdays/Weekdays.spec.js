import React from 'react';
import {DatepickerMockProvider as Provider} from 'lib/utils/testProvider';
import {render} from '@testing-library/react';
import Weekdays from './Weekdays';

const defaultProps = {
  names: [
    {
      numeric: 1,
      wide: 'wide1',
      abbreviated: 'abbreviated1',
      narrow: 'narrow1',
      short: 'short1',
    },
    {
      numeric: 2,
      wide: 'wide2',
      abbreviated: 'abbreviated2',
      narrow: 'narrow2',
      short: 'short2',
    },
    {
      numeric: 3,
      wide: 'wide3',
      abbreviated: 'abbreviated3',
      narrow: 'narrow3',
      short: 'short3',
    },
  ],
};

describe('WeekDays', () => {
  it(`it renders`, () => {
    const {asFragment} = render(<Weekdays {...defaultProps} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
