import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

import "./ListItem.scss";

const ListItem = ({ children, ...props }) => {
    const { Item } = ListGroup;
    return (
        <Item {...props}>{ children }</Item>
    )
}

ListItem.propTypes = {
    variant: PropTypes.string
}

ListItem.defaultProps = {
    variant: ''
}

export default ListItem;