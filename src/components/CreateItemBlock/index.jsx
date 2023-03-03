/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

import AddItemBlock from "../AddItemBlock";
import ProgressBar from "../ProgressBar";
import ProgressFraction from "../ProgressFraction";
import ListGroup from "../ListGroup";
import ListItem from "../ListItem";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Header from "../Header";

import './CreateItemBlock.scss';

const CreateItemBlock = (props) => {
    const { tasksBefore, tasksToday, questions, onCreateTaskLocalStorage, onGetTaskLocalStorage, taskType = 'tasksToday', user = 'User', title } = props;
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);
    const [isAddItemBlockDisplayed, setIsAddItemBlockDisplayed] = useState(false);
    const [numberOfCheckedItems, setNumberOfCheckedItems] = useState(0);
    const [toggleStoreUpdate, setToggleStoreUpdate] = useState(false);
    const [, setRerender] = useState(false);
    const [didMount, setDidMount] = useState(false);

    useLayoutEffect(() => {
        onGetTaskLocalStorage(user, taskType);
    }, []);

    useEffect(() => {
        if (!didMount) { 
            setDidMount(true);
            return;
        }
        onCreateTaskLocalStorage(user, taskType, taskItems);
    }, [taskItems, toggleStoreUpdate]);

    useEffect(() => {
        const state = {
            tasksBefore,
            tasksToday,
            questions
        }
        if (!didMount && state[taskType].length > 0) { 
            setTaskItems(state[taskType]);
        }
    }, [tasksBefore, tasksToday, questions])

    useEffect(() => {
        const state = {
            tasksBefore,
            tasksToday,
            questions
        }
        setTaskItems(state[taskType]);
    }, [user]);

    //TODO: re #14 - App UI will support ReactJs implementation
    //for imran to evaluate, need to create API endpoints in asp.net that can be called from reactjs

    // TODO: integrate api calls to the backend
    // const postData = () => {
    // { id: "0" task: "task 1" }
    // }

    // TODO: integrate api calls to the backend
    // const getData = () => {
    // { id: "dataId" task: "task 1" }
    // }

    // TODO: integrate api calls to the backend
    // const getAllData = () => {
    // { task: "task 1" }
    // }

    // TODO: integrate api calls to the backend
    // const updateData = () => {
    // { id: "dataId" task: "task 1" }
    // }

    // TODO: integrate api calls to the backend
    // const Data = () => {

    // }

    const getNumberOfCheckedItems = () => {
        let checkedItemsCount = 0;
        taskItems.forEach(taskItem => {
            if (taskItem.checked) {
                checkedItemsCount++;
            }
        })
        return checkedItemsCount;
    }

    const handleAddNewItemClick = () => { setIsAddItemBlockDisplayed(true) };

    const handleAddClick = () => {
        setTaskItems(prevTaskItems => [...prevTaskItems, { task, editTask: task, checked: false, isEditClicked: false }]);
        setTask('');
    }

    const handleEditClick = (index) => {
        setTaskItems(prevTaskItems => {
            prevTaskItems.forEach(prevTaskItem => {
                prevTaskItem.isEditClicked = false;
            })
            prevTaskItems[index] = { ...prevTaskItems[index], isEditClicked: true };
            return prevTaskItems;
        });
        setRerender(prevState => !prevState);
    }

    const handleEditInputChange = (e, index) => {
        setTaskItems(prevTaskItems => {
            prevTaskItems[index] = { ...prevTaskItems[index], editTask: e.target.value };
            return prevTaskItems;
        });
        setRerender(prevState => !prevState);
    }

    const handleEditSaveClick = (index) => {
        setTaskItems(prevTaskItems => {
            prevTaskItems[index] = { ...prevTaskItems[index], task: prevTaskItems[index].editTask, isEditClicked: false };
            return prevTaskItems;
        });
        handleEditCancelClick(index);
    }

    const handleEditInputKeyPressEnter = (e, index) => {
        if (e.key === "Enter") {
            handleEditSaveClick(index);
        }
    }

    const handleEditCancelClick = (index) => {
        setTaskItems(prevTaskItems => {
            prevTaskItems[index] = { ...prevTaskItems[index], isEditClicked: false };
            return prevTaskItems;
        });
        setToggleStoreUpdate(prevState => !prevState);
    }

    const handleDeleteClick = (index) => {
        setTaskItems(prevTaskItems => {
            prevTaskItems.splice(index, 1);
            return prevTaskItems;
        });
        setNumberOfCheckedItems(getNumberOfCheckedItems);
        setToggleStoreUpdate(prevState => !prevState);
    }

    const handleInputKeyPressEnter = (e) => {
        if (e.key === "Enter" && task) {
            handleAddClick();
        }
    }

    const handleCancelClick = () => { setIsAddItemBlockDisplayed(false) }

    const handleCheckboxClick = (index) => {
        setTaskItems(prevTaskItems => {
            prevTaskItems[index] = { ...prevTaskItems[index], checked: !prevTaskItems[index].checked };
            return prevTaskItems;
        });
        setNumberOfCheckedItems(getNumberOfCheckedItems);
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(taskItems);
        const [reOrderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reOrderedItem);
        setTaskItems(items);
    }

    return (
        <div {...props} className='create-item-block'>
            <Header type='h3' >{ title || "What I did in the last day / week" }</Header>
            <div className="add-item-progress-bar">
                <Button variant='link' onClick={handleAddNewItemClick} >+ Add new item</Button>
                <div className="progress-bar-container">
                    <ProgressBar now={(numberOfCheckedItems / (taskItems.length || 1)) * 100} label={`${Math.floor((numberOfCheckedItems / taskItems.length) * 100)}%`} />
                </div>
                <ProgressFraction>{numberOfCheckedItems}/{taskItems.length}</ProgressFraction>
            </div>
            {isAddItemBlockDisplayed ? <AddItemBlock
                inputProps={{
                    placeholder: 'Add new item',
                    value: task,
                    onChange: (e) => { setTask(e.target.value) },
                    onKeyPress: handleInputKeyPressEnter
                }}
                addButtonProps={{
                    variant: 'success',
                    onClick: handleAddClick,
                    disabled: task ? false : true,
                    children: 'Add'
                }}
                cancelButtonProps={{
                    variant: 'link',
                    onClick: handleCancelClick,
                    children: 'Cancel'
                }}
            /> : null}
            <div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId='droppable'>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <ListGroup>
                                    {
                                        taskItems?.map((taskItem, index) => (
                                            <Draggable key={`draggable${index}`} draggableId={`draggable${index}`} index={index}>
                                                {(provided) => (
                                                    <div {...provided.draggableProps} ref={provided.innerRef}>
                                                        <ListItem>
                                                            <div className="checkbox-text">
                                                                <div {...provided.dragHandleProps}>
                                                                    <DragIndicatorIcon />
                                                                </div>
                                                                <Checkbox isValid checked={taskItem.checked} onChange={() => { handleCheckboxClick(index) }} />
                                                                {taskItem.isEditClicked ? null : taskItem.task}
                                                            </div>
                                                            {taskItem.isEditClicked ?
                                                                <AddItemBlock
                                                                    inputProps={{
                                                                        placeholder: 'Edit item',
                                                                        value: taskItem.editTask,
                                                                        autoFocus: true,
                                                                        onChange: (e) => { handleEditInputChange(e, index) },
                                                                        onKeyPress: (e) => { handleEditInputKeyPressEnter(e, index) }
                                                                    }}
                                                                    addButtonProps={{
                                                                        variant: 'success',
                                                                        onClick: () => { handleEditSaveClick(index) },
                                                                        children: 'Save'
                                                                    }}
                                                                    cancelButtonProps={{
                                                                        variant: 'link',
                                                                        onClick: () => { handleEditCancelClick(index) },
                                                                        children: 'Cancel'
                                                                    }} /> :
                                                                <div className="edit-delete">
                                                                    <EditIcon onClick={() => { handleEditClick(index) }} />
                                                                    <DeleteIcon onClick={() => { handleDeleteClick(index) }} />
                                                                </div>
                                                            }
                                                        </ListItem>
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))
                                    }
                                </ListGroup>
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>

        </div>
    )
}

CreateItemBlock.propTypes = {
    className: PropTypes.string
}

CreateItemBlock.defaultProps = {
    className: ''
}

const mapStateToProps = state => {
    return {
        user: state.task.user,
        tasksBefore: state.task.tasksBefore,
        tasksToday: state.task.tasksToday,
        questions: state.task.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateTaskLocalStorage: (user, taskType, taskItems) => dispatch(actions.createTaskLocalStorage(user, taskType, taskItems)),
        onGetTaskLocalStorage: (user, taskType) => dispatch(actions.getTaskLocalStorage(user, taskType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItemBlock);