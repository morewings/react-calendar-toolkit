import React from 'react';
import PropTypes from 'prop-types';
import classes from './Fieldset.module.scss';

const Fieldset = props => (
  <fieldset className={props.className}>{props.children}</fieldset>
);

Fieldset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Fieldset.defaultProps = {
  className: classes.wrapper,
};

export default Fieldset;
