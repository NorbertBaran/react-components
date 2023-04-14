import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/account/Footer'
import Socialmedia from "../components/global/Socialmedia";

const meta: Meta<typeof Socialmedia> = {
    title: 'Socialmedia',
    component: Socialmedia,
    tags: ['autodocs'],
    argTypes: {},
}
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};