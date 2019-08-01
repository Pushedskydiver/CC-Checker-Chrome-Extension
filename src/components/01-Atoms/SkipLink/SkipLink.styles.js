import styled, { css } from 'styled-components';
import { typography } from '../../../styles/settings.typography.styles';
import { minWidth, maxWidth } from '../../../styles/settings.breakpoints.styles';
import spacing from '../../../styles/settings.spacing.styles';

const SkipLink = styled.a`
  position: absolute;
  top: 0;
  font-variation-settings: 'wght' ${typography.weight.medium};
  line-height: normal;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:active,
  &:focus {
    clip: auto;
    overflow: visible;
    z-index: 20;
  }

  ${maxWidth('768', () => css`
    width: 100%;
    padding-top: ${spacing.padding}px;
    padding-bottom: ${spacing.padding}px;
    background-color: var(--background);
    color: var(--foreground);
    text-align: center;
  `)}

  ${minWidth('768', () => css`
    width: auto;
    transform: translateY(-50%);
  `)}
`;

export default SkipLink;
