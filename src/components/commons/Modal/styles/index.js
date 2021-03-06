import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .3s;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: auto;

  outline: 0;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
        justify-content: center;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

export default ModalWrapper;
