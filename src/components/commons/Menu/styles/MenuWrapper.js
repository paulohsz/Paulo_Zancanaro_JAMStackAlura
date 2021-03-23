import styled, { css } from 'styled-components';
import breakpointsMedia from '@theme/utils/breakpointsMedia';
import { TextStyleVariants } from '@components/foundation/Text';

const MenuWrapper = styled.nav`
  font-family: ${({ theme }) => theme.fontFamily};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;

  a:hover .hover-item{font-weight:bold}

  h2 {
    display: none;
  }


${breakpointsMedia({
    md: css`
      max-width: ${({ theme }) => theme.breakpoints.md}px;
      justify-content: flex-start;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 32px 16px 0px 16px;
      `,
    lg: css`
      max-width: ${({ theme }) => theme.breakpoints.lg}px;
    `,
    xl: css`
      max-width: ${({ theme }) => theme.breakpoints.xl}px;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  height: 30px;
  width: 100%;
  ${breakpointsMedia({
    md: css`
        order: initial;
        width: 200px;
      `,
  })}
`;

MenuWrapper.RightSide = styled.div`
  width: 100%;
  order: 2;
  flex: 1;
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 12px;
  border-top: 1px solid #9FB6D040;
  border-bottom: 1px solid #9FB6D040;
  
  ${breakpointsMedia({
    md: css`
      max-width: ${({ theme }) => theme.breakpoints.md};
      justify-content: flex-end;
      flex: 1;
      border: none;
      order: initial;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })} 

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    //color: ${({ theme }) => theme.colors.tertiary.light.color};
    color: #F5F5F5;
    transition: 200ms ease-in-out;
    font-weight: 400;
    ${TextStyleVariants.paragraph1}

    ${breakpointsMedia({
    xs: css`
          &:after {
            margin-top: 2px;
            height: 1px;
          }
      `,
    md: css`
        margin-left: 32px;
        &:after {
            margin-top: 0px;
            height: 2px;
          }
      `,
  })}

    &:before {
      content: attr(title);
      display:block;
      font-weight: 700;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
    
    &:after {
      content: "";
      display: block;
      width: 15px;
      background-color: #F5F5F5;
      margin-left: 3px;
      transition: 0.3s ease-out all .1s;
      border-radius: 2px;
    }
    
    &:hover,
    &:focus {
      font-weight: 700;
      opacity: 1;
      //color: ${({ theme }) => ((theme.colors.mode === 'light') ? theme.colors.tertiary.main.color : theme.colors.secondary.main.color)};
      &:after {
        width: 100%;
        transition: 0.4s ease all;
        margin-left: 0px;
    }
      
    }
  }
`;

export default MenuWrapper;
