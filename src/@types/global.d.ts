import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { ThemedStyledProps } from 'styled-components';

import { Theme } from '../config/theme';

// This is just to way a easy way to use StyledProps in styled component to avoid import cross types
declare global {
  type StyledProps = ThemedStyledProps<
    Omit<
      DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'ref'
    >,
    Theme
  >;
}
