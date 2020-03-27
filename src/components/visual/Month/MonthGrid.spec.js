import React from 'react';
import {DatepickerMockProvider as Provider} from 'utils/testProvider';
import {render} from '@testing-library/react';
import MonthGrid from './MonthGrid';

const Mock = () => <div>Mock</div>;

describe('MonthGrid', () => {
  it('renders', () => {
    const {asFragment} = render(
      <MonthGrid>
        <Mock />
      </MonthGrid>,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
