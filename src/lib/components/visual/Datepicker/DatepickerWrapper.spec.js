import React from 'react';
import {DatepickerMockProvider as Provider} from 'lib/utils/testProvider';
import {render} from '@testing-library/react';
import DatepickerWrapper from './DatepickerWrapper';

const Mock = () => <div>Mock</div>;

describe('DatepickerWrapper', () => {
  it('renders', () => {
    const {asFragment} = render(
      <DatepickerWrapper title="Title">
        <Mock />
      </DatepickerWrapper>,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
