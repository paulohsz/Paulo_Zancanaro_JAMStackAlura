import styled, { css } from 'styled-components';
import polygonClip from '../../../../theme/utils/polygonClip';

const FooterWrapper = styled.footer`

  ${polygonClip('polygonTop')}
  background-color: ${({ theme }) => theme.colors.background.dark};
  
  h1 {
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
      color: ${theme.colors.primary.main.color};
    `}
  }
  ul {
    padding: 0px;
    margin-bottom: 22px;
  }
  ul li {
    list-style:none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.quaternary.main.color};
    margin-bottom: 12px;
    height: 26px;
  }
  svg {
    fill: ${({ theme }) => theme.colors.quaternary.main.color};
    width: 24px;
    margin-right: 12px;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.quaternary.main.color};    transition: .3s;
    &:hover,
      &:focus {
        opacity: .5;
      }
  }
`;

export default FooterWrapper;
