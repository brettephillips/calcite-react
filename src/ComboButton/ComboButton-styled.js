import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/Button-styled';

const StyledComboButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const StyledComboButton = StyledButton.extend`
  border-right-width: 0;
`;

const StyledComboButtonDropdown = StyledButton.extend`
  height: 100%;
  fill: currentColor;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  display: flex;
  border-left: 1px solid ${props => props.theme.palette.darkBlue};

  ${props =>
    props.clear &&
    css`
      border-left-color: ${props => props.theme.palette.blue};
    `};

  ${props =>
    props.clearGray &&
    css`
      border-left-color: ${props => props.theme.palette.gray};
    `};

  ${props =>
    props.red &&
    css`
      border-left-color: ${props => props.theme.palette.red};
    `};

  ${props =>
    props.green &&
    css`
      border-left-color: ${props => props.theme.palette.darkGreen};
    `};
`;

export {
  StyledComboButtonContainer,
  StyledComboButton,
  StyledComboButtonDropdown
};