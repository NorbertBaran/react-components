import Header from "../components/account/Header";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Header> = {
    title: 'Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'React',
        accent: 'Components'
    },
};
