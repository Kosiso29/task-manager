/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Header from "../components/Header";

export default {
    title: 'Components/Header',
    component: Header
};

const Template = (args) => <Header {...args} />;

export const h1 = Template.bind({});
h1.args = {
    type: 'h1',
    children: 'Header'
}

export const h2 = Template.bind({});
h2.args = {
    type: 'h2',
    children: 'Header'
}

export const h3 = Template.bind({});
h3.args = {
    type: 'h3',
    children: 'Header'
}

export const h4 = Template.bind({});
h4.args = {
    type: 'h4',
    children: 'Header'
}

export const h5 = Template.bind({});
h5.args = {
    type: 'h5',
    children: 'Header'
}

export const h6 = Template.bind({});
h6.args = {
    type: 'h6',
    children: 'Header'
}