/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Checkbox from "../components/Checkbox";

export default {
    title: 'Components/Checkbox',
    component: Checkbox
};

const Template = (args) => <Checkbox {...args} />;

export const Main = Template.bind({});
Main.args = {
    label: 'Checkbox'
}
