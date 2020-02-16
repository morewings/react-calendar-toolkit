import React from 'react';
import PropTypes from 'prop-types';
import './Fieldset.scss';

const Fieldset = props => (
  <fieldset className={props.className}>{props.children}</fieldset>
);

Fieldset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Fieldset.defaultProps = {
  className: 'datepicker-fieldset',
};

export default Fieldset;
