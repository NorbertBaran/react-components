import Restore from "../components/auth/Restore";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Restore> = {
    title: 'Restore',
    component: Restore,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: {label: 'Speaker'},
        actions: {reset: () => console.log('Reset'), signin: () => console.log('Sign in')}
    },
};
