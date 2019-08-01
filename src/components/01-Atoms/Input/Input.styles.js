import styled, { css } from 'styled-components';
import { typography } from '../../../styles/settings.typography.styles';

const InputStyles = styled.input`
  border-radius: 0;
  background-color: transparent;
  color: inherit;

  ${props => props.type !== 'color' && css`
    width: 100%;
    border-top: none;
    border-right: none;
    border-bottom: 3px solid currentColor;
    border-left: none;
    font-size: ${typography.heading.size.medium};
    font-variation-settings: 'wght' ${typography.weight.bold};
    transition: border-bottom-color 0.3s ease-in-out;
  `}

  ${props => props.type === 'color' && css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    cursor: pointer;
  `}
`;

export default InputStyles;
