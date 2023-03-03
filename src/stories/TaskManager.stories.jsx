import React from "react";
import TaskManager from "../containers/TaskManager";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from "../store/reducers/task";

const rootReducer = combineReducers({
    task: taskReducer
})

const store = configureStore({ reducer: rootReducer });

export default {
    title: 'Components/TaskManager',
    component: TaskManager
};

const Template = (args) => <Provider store={store}>
    <TaskManager {...args} />
</Provider> 

export const Main = Template.bind({});
Main.args = { }
