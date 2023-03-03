/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import TextInput from "../components/TextInput";

export default {
    title: 'Components/TextInput',
    component: TextInput
};

const Template = (args) => <TextInput {...args} />;

export const Main = Template.bind({});
Main.args = {
    type: 'text',
    placeholder: 'TextInput'
}