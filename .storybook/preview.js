import { ThemeProvider } from 'styled-components';
import GlobalStyles from "../src/styles/global";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles/>
      <Story />
    </>
  ),
];