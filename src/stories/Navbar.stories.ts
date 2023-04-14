import Navbar from '../components/account/navbar/Navbar';
import {Home, KeyboardVoice, Logout, Person} from "@mui/icons-material";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Navbar> = {
    title: 'Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {},
}


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: {label: 'React', accent: 'Components'},
        links: [{
            label: 'Home',
            onClick: () => console.log('Records')
        },{
            label: 'Profile',
            onClick: () => console.log('Profile')
        }],
        avatar: {
            username: 'Norbert Baran',
            src: '',
            items: [{
                icon: Home,
                label: 'Home',
                onClick: () => console.log('Records')
            },{
                icon: Person,
                label: 'Profile',
                onClick: () => console.log('Profile')
            },{
                icon: Logout,
                label: 'Logout',
                onClick: () => console.log('Logout')
            }]
        },
        blank: false
    },
};
