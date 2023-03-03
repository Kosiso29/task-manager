/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ListGroup from "../components/ListGroup";
import ListItem from "../components/ListItem";

export default {
    title: 'Components/ListGroup',
    component: ListGroup
};

const Template = (args) => <ListGroup {...args} />;

export const Main = Template.bind({});
Main.args = {
    variant: 'success',
    children: <>
        <ListItem variant='success'>ListGroup</ListItem>
        <ListItem variant='danger'>ListGroup</ListItem>
    </>
}
