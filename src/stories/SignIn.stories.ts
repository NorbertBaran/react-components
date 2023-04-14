import SignIn from "../components/auth/SignIn";
import {Meta, StoryObj} from "@storybook/react";
import Restore from "../components/auth/Restore";

const meta: Meta<typeof SignIn> = {
    title: 'SignIn',
    component: SignIn,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: {
            label: 'Speaker'
        },
        actions: {
            signin: ()=>console.log('Signi in'),
            google: ()=>console.log('Google'),
            signup: ()=>console.log('Sign up'),
            restore: ()=>console.log('Restore')
        }
    },
};
