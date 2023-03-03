/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ListItem from "../components/ListItem";

export default {
    title: 'Components/ListItem',
    component: ListItem
};

const Template = (args) => <ListItem {...args}>ListItem</ListItem>;

export const Main = Template.bind({});
Main.args = {
    variant: 'success'
}
