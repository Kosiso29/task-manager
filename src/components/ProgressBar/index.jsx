import { ProgressBar as BootstrapProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
    return (
        <BootstrapProgressBar {...props} />
    );
}

ProgressBar.propTypes = {
    now: PropTypes.number,
    label: PropTypes.string
}

ProgressBar.defaultProps = {
    now: 50,
    label: '50%'
}

export default ProgressBar;
