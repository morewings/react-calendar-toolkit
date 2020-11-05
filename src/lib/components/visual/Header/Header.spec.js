import React from 'react';
import {DatepickerMockProvider as Provider} from 'lib/utils/testProvider';
import {render} from '@testing-library/react';
import Header from './Header';

const date = new Date(2020, 0, 10);

describe('Header', () => {
  it('renders', () => {
    const {asFragment} = render(
      <Header selectedDate={date} todayDate={date} title="Title" />,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
