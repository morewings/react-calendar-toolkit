import React from 'react';
import {DatepickerMockProvider as Provider} from 'utils/testProvider';
import {render, fireEvent} from '@testing-library/react';
import Year from './Year';

const defaultProps = {
  onDateSet: jest.fn(),
  date: new Date(2020, 0, 12),
  name: {
    numeric: 1,
  },
};

describe('Year', () => {
  beforeEach(() => {
    defaultProps.onDateSet.mockClear();
  });

  describe.each`
    belongsToSameMonth | isCurrent | isSelected | isHighlighted | isWeekend
    ${true}            | ${true}   | ${true}    | ${true}       | ${true}
    ${false}           | ${true}   | ${true}    | ${true}       | ${true}
    ${false}           | ${false}  | ${false}   | ${false}      | ${false}
  `(
    'display props',
    ({
      belongsToSameMonth,
      isCurrent,
      isSelected,
      isDisabled,
      isHighlighted,
      isWeekend,
    }) => {
      it(`it renders`, () => {
        const props = {
          ...defaultProps,
          belongsToSameMonth,
          isCurrent,
          isSelected,
          isDisabled,
          isHighlighted,
          isWeekend,
        };
        const {asFragment} = render(<Year {...props} />, {
          wrapper: ({children}) => <Provider>{children}</Provider>,
        });
        expect(asFragment()).toMatchSnapshot();
      });
    }
  );

  it('handles click when belongsToSameMonth === true', () => {
    const props = {
      ...defaultProps,
      belongsToSameMonth: true,
      isCurrent: false,
      isSelected: false,
      isDisabled: false,
      isHighlighted: false,
      isWeekend: false,
    };
    const {getByRole} = render(<Year {...props} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    fireEvent.click(getByRole('button'));
    expect(defaultProps.onDateSet).toHaveBeenCalledTimes(1);
    expect(defaultProps.onDateSet).toHaveBeenCalledWith(defaultProps.date);
  });
});
