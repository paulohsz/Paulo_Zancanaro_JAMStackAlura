import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import get from 'lodash/get';
import { TextStyleVariants } from '@components/foundation/Text';
import propToStyle from '@theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ theme }) => css`
    transition: opacity ${theme.transition};
    border-radius: ${theme.borderRadius};
  `};
  
  ${TextStyleVariants.paragraph1}

  &:hover,
  &:focus {
    opacity: .5;
  }

  ${propToStyle('margin')}
  ${propToStyle('display')}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

`;

export default Button;
