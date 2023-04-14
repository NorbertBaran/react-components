import {Meta, StoryObj} from "@storybook/react";
import Paper from "../components/global/Paper";

const meta: Meta<typeof Paper> = {
    title: 'Paper',
    component: Paper,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
};
