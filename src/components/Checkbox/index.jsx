import React from 'react';
import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';

import "./Checkbox.scss";

const Checkbox = ({ children, ...props }) => {
    const { Check } = Form;
    return (
        <Check {...props} />
    );
};

Checkbox.propTypes = {
    type: PropTypes.string,
    isValid: PropTypes.bool,
    label: PropTypes.string
};

Checkbox.defaultProps = {
    type: 'checkbox',
    isValid: true,
    label: ''
};

export default Checkbox;
