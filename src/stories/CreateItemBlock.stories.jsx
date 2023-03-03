/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import CreateItemBlock from "../components/CreateItemBlock";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from "../store/reducers/task";

const rootReducer = combineReducers({
    task: taskReducer
})

const store = configureStore({ reducer: rootReducer });

export default {
    title: 'Components/CreateItemBlock',
    component: CreateItemBlock
};

const Template = (args) => <Provider store={store}>
    <CreateItemBlock {...args} />
</Provider> 

export const Main = Template.bind({});
Main.args = { }
