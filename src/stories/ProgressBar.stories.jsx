import React from "react";
import ProgressBar from "../components/ProgressBar";

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar
}

const Template = (args) => <ProgressBar {...args} />

export const Main = Template.bind({});
Main.args = {
    now: 50,
    label: '50%'
}