import React from 'react';
import {DatepickerMockProvider as Provider} from 'lib/utils/testProvider';
import {render} from '@testing-library/react';
import WeekDayGrid from './WeekDayGrid';

const Mock = () => <div>Mock</div>;

describe('WeekDayGrid', () => {
  it('renders', () => {
    const {asFragment} = render(
      <WeekDayGrid>
        <Mock />
      </WeekDayGrid>,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
