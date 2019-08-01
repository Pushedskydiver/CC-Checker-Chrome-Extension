import styled, { css } from 'styled-components';

const IconStyles = styled.svg`
  display: inline-block;
  vertical-align: middle;

  ${props => props.colorPicker && css `
    position: absolute;
    top: 50%;
    left: 50%;
    touch-action: none;
    user-select: none;
    transform: translate(-50%, -50%);
  `}
`;

export default IconStyles;
