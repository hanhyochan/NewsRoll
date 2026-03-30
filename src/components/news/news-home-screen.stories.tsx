import type { Meta, StoryObj } from "@storybook/react";

import { NewsHomeScreen } from "@/components/news/news-home-screen";

const meta = {
  title: "Screens/NewsHomeScreen",
  component: NewsHomeScreen,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NewsHomeScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
