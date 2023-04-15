import styled from 'styled-components';

export const InputContainer = styled.input`
  padding-top: ${(props: StyledProps) => props.theme.spacing.sm};
  padding-bottom: ${(props: StyledProps) => props.theme.spacing.sm};
  padding-right: ${(props: StyledProps) => props.theme.spacing.xxl};
  padding-left: ${(props: StyledProps) => props.theme.spacing.md};
  box-sizing: border-box;
  position: relative;
  color: ${(props: StyledProps) => props.theme.colors.text};
  font-size: ${(props: StyledProps) => props.theme.typography.size.sm};
  margin: 0;
  font-family: inherit;
  border-radius: ${(props: StyledProps) => props.theme.borderRadius.sm};
  background-color: ${(props: StyledProps) => props.theme.colors.background};
  display: flex;
  box-shadow: ${(props: StyledProps) => props.theme.shadow.sm};
  height: ${(props: StyledProps) => props.theme.spacing.xl};
  width: 100%;
  border-style: solid;
  border-color: ${(props: StyledProps) => props.theme.colors.border};
  border-width: ${(props: StyledProps) => props.theme.spacing.xxs};
  &:focus {
    outline: none;
    border-color: ${(props: StyledProps) => props.theme.colors.border};
    box-shadow: ${(props: StyledProps) => props.theme.shadow.md};
  }
  &::placeholder {
    color: ${(props: StyledProps) => props.theme.colors.textSecondaryLight};
    font-weight: ${(props: StyledProps) =>
      props.theme.typography.weight.regular};
  }
`;
