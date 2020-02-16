import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Popover.module.css';

const Popover = props => (
  <div
    className={classNames({
      [props.className]: Boolean(props.className),
      [props.placement]: Boolean(props.placement),
      [classes.bottomLeft]: props.placement === 'bottom-left',
      [classes.bottomRight]: props.placement === 'bottom-right',
      [classes.topLeft]: props.placement === 'top-left',
      [classes.topRight]: props.placement === 'top-right',
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
  className: classes.container,
  placement: classes.bottomLeft,
};

export default Popover;
