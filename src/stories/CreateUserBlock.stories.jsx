import React from "react";
import CreateUserBlock from "../components/CreateUserBlock";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from "../store/reducers/task";

const rootReducer = combineReducers({
    task: taskReducer
})

const store = configureStore({ reducer: rootReducer });

export default {
    title: 'Components/CreateUserBlock',
    component: CreateUserBlock
}

const Template = (args) => <Provider store={store}>
    <CreateUserBlock {...args} />
</Provider> 
export const Main = Template.bind({});
Main.args = { }