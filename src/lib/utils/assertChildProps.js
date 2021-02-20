import React, {Fragment} from 'react';

export const assertChildProps = () => {
  const trackProps = jest.fn();

  const Component = props => {
    trackProps(props);
    return <Fragment>Child</Fragment>;
  };
  return [Component, trackProps];
};
