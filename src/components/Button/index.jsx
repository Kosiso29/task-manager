import React from 'react';
import { Button as BootstrapButton } from "react-bootstrap";
import PropTypes from 'prop-types';
import "./Button.scss"

/**
 * Primary UI component for user interaction
 */
const Button = ({ children, ...props }) => {
  return (
      <BootstrapButton className='button' {...props}>
          { children }
      </BootstrapButton>
  );
};

Button.propTypes = {
  /**
   * variant colors of the button
   */
  variant: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'secondary',
  onClick: () => {},
};

export default Button;
