import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const SelectInput = (props) => {
    const { children, ...otherProps } = props;
    const { Select } = Form;
    return (
        <Select {...otherProps}>
            { children }
        </Select>
    );
}

SelectInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string
}

SelectInput.defaultProps = {
    type: 'text'
}

export default SelectInput;