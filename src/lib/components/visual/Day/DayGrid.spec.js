import React from 'react';
import {DatepickerMockProvider as Provider} from 'lib/utils/testProvider';
import {render} from '@testing-library/react';
import DayGrid from './DayGrid';

const Mock = () => <div>Mock</div>;

describe('DayGrid', () => {
  it('renders', () => {
    const {asFragment} = render(
      <DayGrid>
        <Mock />
      </DayGrid>,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
