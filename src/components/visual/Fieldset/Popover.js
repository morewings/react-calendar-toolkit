import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Popover.scss';

const Popover = props => (
  <div
    className={classNames({
      [props.className]: Boolean(props.className),
      [props.placement]: Boolean(props.placement),
    })}>
    {props.children}
  </div>
);

Popover.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf([
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right',
  ]),
};

Popover.defaultProps = {
  className: 'popover-container',
  placement: 'bottom-left',
};

export default Popover;
