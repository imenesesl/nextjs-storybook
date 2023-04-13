import { Theme } from './types';

export const tokens: Theme = {
  typography: {
    size: {
      lg: '1.5rem',
      md: '1.25rem',
      sm: '1rem',
    },
    weight: {
      bold: 700,
      medium: 500,
      regular: 400,
    },
  },
  borderRadius: {
    lg: '12px',
    md: '8px',
    sm: '4px',
  },
  colors: {
    primary: '#1d8ffc',
    primaryDark: '#0057b8',
    primaryLight: '#f0f8ff',
    secondary: '#ffc453',
    secondaryDark: '#bf9900',
    secondaryLight: '#ffd886',
    background: '#f4f6f8',
    text: '#1c1f23',
    textSecondary: '#637381',
    success: '#35c854',
    warning: '#fa4d56',
  },
  spacing: {
    lg: '32px',
    md: '16px',
    sm: '8px',
    xl: '48px',
    xs: '4px',
    xxl: '64px',
    xxs: '2px',
  },
};
