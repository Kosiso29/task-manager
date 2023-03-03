import { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as actions from "../../store/actions";
import AddItemBlock from "../AddItemBlock";
import SelectInput from "../SelectInput";
import ListGroup from "../ListGroup";
import ListItem from "../ListItem";
import DeleteIcon from '@material-ui/icons/Delete';

import "./CreateUserBlock.scss"

const CreateUserBlock = (props) => {
    const { onCreateUserLocalStorage, onGetUsersLocalStorage, onSetUserLocalStorage, onDeleteUserLocalStorage, user: reducerUser, users } = props;
    const [user, setUser] = useState('');
    const [, setRerender] = useState(false);

    useLayoutEffect(() => {
        onGetUsersLocalStorage();
    }, [onGetUsersLocalStorage]);

    useEffect(() => {
        setRerender(prevState => !prevState);
    }, [users, reducerUser]);

    const handleAddClick = () => {
        onCreateUserLocalStorage(user);
        setUser('')
    }

    const handleSetUser = (e) => {
        onSetUserLocalStorage(e.target.value);
    }

    const handleInputKeyPressEnter = (e) => {
        if (e.key === "Enter" && user) {
            handleAddClick();
        }
    }

    const handleDeleteClick = () => {
        onDeleteUserLocalStorage(reducerUser);
    }

    return (
        <div className="create-user-block">
            <AddItemBlock
                inputProps={{
                    placeholder: 'Add new item',
                    value: user,
                    onChange: (e) => { setUser(e.target.value) },
                    onKeyPress: handleInputKeyPressEnter
                }}
                addButtonProps={{
                    variant: 'success',
                    onClick: handleAddClick,
                    disabled: user ? false : true,
                    children: 'Add'
                }}
            />
            <SelectInput onChange={handleSetUser}>
                {users.map((user, index) => (
                    <option key={index}>{user}</option>
                ))}
            </SelectInput>
            <ListGroup>
                {reducerUser ?
                    <ListItem>
                        {reducerUser}
                        <div className="edit-delete">
                            <DeleteIcon onClick={() => { handleDeleteClick() }} />
                        </div>
                    </ListItem> : null
                }
            </ListGroup>
        </div>
    );
}

CreateUserBlock.propTypes = {
    now: PropTypes.number,
    label: PropTypes.string
}

CreateUserBlock.defaultProps = {
    now: 50,
    label: '50%'
}

const mapStateToProps = state => {
    return {
        user: state.task.user,
        users: state.task.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateUserLocalStorage: (user) => dispatch(actions.createUserLocalStorage(user)),
        onGetUsersLocalStorage: () => dispatch(actions.getUsersLocalStorage()),
        onSetUserLocalStorage: (user) => dispatch(actions.setUserLocalStorage(user)),
        onDeleteUserLocalStorage: (user) => dispatch(actions.deleteUserLocalStorage(user)),
        onGetTaskLocalStorage: (user, taskType) => dispatch(actions.getTaskLocalStorage(user, taskType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserBlock);
