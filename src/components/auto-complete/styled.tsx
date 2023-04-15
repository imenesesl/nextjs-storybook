import { BsSearch } from 'react-icons/bs';
import styled, { keyframes } from 'styled-components';

import { TextField as TextFieldBase } from '../text-field/TextField';

export const SectionContainer = styled.section`
  position: relative;
`;

export const TextField = styled(TextFieldBase)`
  position: relative;
`;
export const SearchButton = styled.button`
  top: 0;
  right: 0;
  position: absolute;
  height: ${(props: StyledProps) => props.theme.spacing.xl};
  width: ${(props: StyledProps) => props.theme.spacing.xl};
  border-style: solid;
  border-color: ${(props: StyledProps) => props.theme.colors.border};
  border-width: ${(props: StyledProps) => props.theme.spacing.xxs};
  outline-color: ${(props: StyledProps) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: StyledProps) =>
    props.theme.colors.backgroundDark};
  cursor: pointer;
`;

export const SearchIcon = styled(BsSearch)`
  height: ${(props: StyledProps) => props.theme.spacing.md};
  width: ${(props: StyledProps) => props.theme.spacing.md};
`;

export const ResultsContainer = styled.div`
  margin-top: ${(props: StyledProps) => props.theme.spacing.xs};
  position: absolute;
  width: 100%;
  height: fit-content;
  background-color: ${(props: StyledProps) =>
    props.theme.colors.backgroundDark};
  box-shadow: ${(props: StyledProps) => props.theme.shadow.sm};
  box-sizing: border-box;
`;

export const ResultsItem = styled.ul`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  height: ${(props: StyledProps) => props.theme.spacing.xl};
  font-size: ${(props: StyledProps) => props.theme.typography.size.sm};
  display: flex;
  align-items: center;
  padding-left: ${(props: StyledProps) => props.theme.spacing.sm};
  padding-right: ${(props: StyledProps) => props.theme.spacing.sm};
  cursor: pointer;
  outline-color: ${(props: StyledProps) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props: StyledProps) =>
      props.theme.colors.primaryLight};
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border-style: solid;
  border-width: ${(props: StyledProps) => props.theme.spacing.xs};
  border-color: ${(props: StyledProps) => props.theme.colors.border};
  border-top-style: solid;
  border-top-width: ${(props: StyledProps) => props.theme.spacing.xs};
  border-top-color: ${(props: StyledProps) => props.theme.colors.primary};
  border-radius: 50%;
  width: ${(props: StyledProps) => props.theme.spacing.lg};
  height: ${(props: StyledProps) => props.theme.spacing.lg};
  animation: ${spin} 1s linear infinite;
`;
