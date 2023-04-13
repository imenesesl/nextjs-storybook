import React from 'react';
import {
  ThemeProvider as SCThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import { tokens } from './tokens';
import { Theme } from './types';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    font-family:'Roboto', sans-serif;
    font-size: ${(props) => props.theme.typography.size.md};
    background-color: ${(props) => props.theme.colors.background};
    margin: 0;
    padding: 0;
  }
`;
type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <>
    <SCThemeProvider theme={tokens}>
      <GlobalStyle />
      {children}
    </SCThemeProvider>
  </>
);
