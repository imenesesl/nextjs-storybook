import React from 'react';

import { InputContainer } from './styled';

export type TextFieldProps = {
  value: string;
  defaultValue?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextField = (props: TextFieldProps) => (
  <InputContainer {...props} />
);
