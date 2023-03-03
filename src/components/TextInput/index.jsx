import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const TextInput = (props) => {
    const { Control } = Form;
    return (
        <Control {...props} />
    );
}

TextInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string
}

TextInput.defaultProps = {
    type: 'text',
    placeholder: 'TextInput'
}

export default TextInput;