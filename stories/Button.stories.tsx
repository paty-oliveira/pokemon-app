import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: "primary",
        label: "Primary"
    }
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
        label: "Secondary"
    }
}