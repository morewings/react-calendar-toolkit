import React from 'react';
import {DatepickerMockProvider as Provider} from 'lib/utils/testProvider';
import {render} from '@testing-library/react';
import WeekDay from './WeekDay';

const defaultProps = {
  name: {
    numeric: 1,
    wide: 'wide',
    abbreviated: 'abbreviated',
    narrow: 'narrow',
    short: 'short',
  },
};

describe('WeekDay', () => {
  it(`it renders`, () => {
    const {asFragment} = render(<WeekDay {...defaultProps} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
