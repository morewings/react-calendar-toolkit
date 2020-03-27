import React from 'react';
import {DatepickerMockProvider as Provider} from 'utils/testProvider';
import {render, fireEvent} from '@testing-library/react';
import WeekDay from './WeekDay';

const defaultProps = {
  name: {
    numeric: 1,
    wide: 'wide',
    abbreviated: 'abbreviated',
    narrow: 'narrow',
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
