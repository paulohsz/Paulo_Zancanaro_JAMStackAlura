import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import propToStyle from '@theme/utils/propToStyle';
import breakpointsMedia from '@theme/utils/breakpointsMedia';
import typographyVariants from '../../../theme/typographyVariants';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
  })}
`;

export const TextStyleVariants = {
  title,
  paragraph1,
  smallestException,
};

const TextBase = styled.span`
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)}; 
  //${({ variant }) => TextStyleVariants[variant]}
  ${({ theme, variant }) => theme.typographyVariants[variant]}

  ${propToStyle('padding')}
  ${propToStyle('margin')}
  ${propToStyle('borderBottom')}
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginTop')}
`;

export default function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};

Text.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span', 'input', 'textarea']),
  variant: PropTypes.oneOf(Object.keys(typographyVariants)),
};
