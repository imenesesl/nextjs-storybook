type BaseSize = {
  sm: string;
  md: string;
  lg: string;
};

type AdvancedSize = {
  xxs: string;
  xs: string;
  xl: string;
  xxl: string;
};

type Weight = {
  regular: number;
  medium: number;
  bold: number;
};

type SizeMixing = BaseSize & AdvancedSize;

type Colors = {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  background: string;
  text: string;
  textSecondary: string;
  success: string;
  warning: string;
};

export type Theme = {
  colors: Colors;
  typography: {
    size: BaseSize;
    weight: Weight;
  };
  spacing: SizeMixing;
  borderRadius: BaseSize;
};
