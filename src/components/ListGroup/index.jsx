import { ListGroup as BootstrapListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const ListGroup = ({ children, ...props }) => {
    return (
        <BootstrapListGroup {...props}>{ children }</BootstrapListGroup>
    )
}

ListGroup.propTypes = {
    variant: PropTypes.string
}

ListGroup.defaultProps = {
    variant: ''
}

export default ListGroup;