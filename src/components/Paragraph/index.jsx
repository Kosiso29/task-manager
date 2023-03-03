import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ children, ...props }) => {
    return (
        <p {...props} >{children}</p>
    )
}

Paragraph.propTypes = {
    className: PropTypes.string
 }

Paragraph.defaultProps = {
    className: ''
 }

export default Paragraph;
