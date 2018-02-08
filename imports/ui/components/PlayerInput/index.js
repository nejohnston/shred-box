import React from 'react';
import PropTypes from 'prop-types';

const RedButton = ({redInput}) => (
  <button onClick={redInput}
  className="red-input-button">
   Red
  </button>
);
const GreenButton = ({greenInput}) => (
  <button onClick={greenInput}
  className="green-input-button">
   Green
  </button>
);


ClearButton.propTypes = {
  redInput: PropTypes.func.isRequired,
  greenInput:
  PropTypes.func.isRequired
};

export default {RedButton,GreenButton};