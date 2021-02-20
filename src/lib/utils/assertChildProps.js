import React, {Fragment} from 'react';

export const trackProps = jest.fn();

export const DummyComponent = props => {
  trackProps(props);
  return <Fragment>Child</Fragment>;
};
