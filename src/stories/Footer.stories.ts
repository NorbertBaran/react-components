import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/account/Footer'

const meta: Meta<typeof Footer> = {
    title: 'Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {},
}
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: {
            label: 'React',
            accent: 'Components'
        },
        content: ' Footer Template \u00A9 2023'
    },
};