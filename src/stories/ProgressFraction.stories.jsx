import React from "react";
import ProgressFraction from "../components/ProgressFraction";

export default {
    title: 'Components/ProgressFraction',
    component: ProgressFraction
}

const Template = (args) => <ProgressFraction {...args}>0/0</ProgressFraction>

export const Main = Template.bind({});
Main.args = { }