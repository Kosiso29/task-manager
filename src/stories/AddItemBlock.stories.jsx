/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import AddItemBlock from "../components/AddItemBlock";

export default {
    title: 'Components/AddItemBlock',
    component: AddItemBlock
};

const Template = (args) => <AddItemBlock {...args} />;

export const Main = Template.bind({});
Main.args = { }
