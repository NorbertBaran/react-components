import SignUp from "../components/auth/SignUp";
import {Meta, StoryObj} from "@storybook/react";
import Restore from "../components/auth/Restore";

const meta: Meta<typeof SignUp> = {
    title: 'SignUp',
    component: SignUp,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        title: {label: 'Speaker'},
        actions: {
            signup: () => console.log('Sign up'),
            google: () => console.log('Sign up'),
            signin: () => console.log('Sign up')
        }
    },
};
