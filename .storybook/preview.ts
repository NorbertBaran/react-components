import type { Preview } from "@storybook/react";
import {ThemeProvider} from "@mui/material";
import {theme} from "./constance";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [(Story) => {return(
      ThemeProvider({theme: theme, children: Story()})
  )},],
};

export default preview;
