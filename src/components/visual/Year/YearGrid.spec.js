import React from 'react';
import {DatepickerMockProvider as Provider} from 'utils/testProvider';
import {render} from '@testing-library/react';
import YearGrid from './YearGrid';

const Mock = () => <div>Mock</div>;

describe('MonthGrid', () => {
  it('renders', () => {
    const {asFragment} = render(
      <YearGrid>
        <Mock />
      </YearGrid>,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
