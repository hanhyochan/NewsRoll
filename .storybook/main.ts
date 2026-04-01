// Work around a Next.js config-loading bug that can mix multiple webpack instances
// with Storybook's webpack builder and crash with "reading 'tap'" errors.
process.env.__NEXT_PRIVATE_RENDER_WORKER ??= "1";

import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};

export default config;
