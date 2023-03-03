import PropTypes from "prop-types";

const ProgressFraction = ({ children, ...props }) => {
    return (
        <span>{ children }</span>
    );
}

ProgressFraction.propTypes = {
    className: PropTypes.string
}

ProgressFraction.defaultProps = {
    className: ''
}

export default ProgressFraction;
