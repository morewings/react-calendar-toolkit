import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './variables.css';

const VariablesContainer = ({children}) => <Fragment>{children}</Fragment>;

VariablesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VariablesContainer;
