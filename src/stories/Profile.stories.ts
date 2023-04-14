import Profile from '../components/auth/Profile'
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Profile> = {
    title: 'Profile',
    component: Profile,
    tags: ['autodocs'],
    argTypes: {},
}


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        avatar: '',
        data: {
            name: 'Norbert',
            lastname: 'Baran',
            email: 'norbertbaran1@gmial.com',
            avatar: () => console.log('Avatar')
        }
    },
};
