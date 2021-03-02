import { css } from 'styled-components';
import breakpointsMedia from '@theme/utils/breakpointsMedia';

export default function polygonClip(propName) {
  return (props) => {
    const polygon = props[propName];

    const clipPadding = (size) => {
      if (propName === 'polygonBottom') {
        return css`
          animation: transitionBottom .75s ease-in;
          padding-bottom: ${size}px;
          clip-path: ${`polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - ${size}px))`};

          @keyframes transitionBottom {
            0% {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
            100% {
              clip-path: ${`polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - ${size}px))`};
            }
          }
        `;
      }

      return css`
          animation: transitionTop .75s ease-in;
          padding-top: ${size}px;
          clip-path: ${`polygon(0 0, 100% ${size}px, 100% 100%, 0 100%)`};

          @keyframes transitionTop {
            0% {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
            100% {
              clip-path: ${`polygon(0 0, 100% ${size}px, 100% 100%, 0 100%)`};
            }
          }
        `;
    };

    if (typeof polygon !== 'number' && typeof polygon !== 'object') return;

    if (typeof polygon === 'object') {
      // eslint-disable-next-line consistent-return
      return css`
        ${breakpointsMedia({
    ...(polygon.xs && {
      xs: clipPadding(polygon.xs),
    }),
    ...(polygon.sm && {
      sm: clipPadding(polygon.sm),
    }),
    ...(polygon.md && {
      md: clipPadding(polygon.md),
    }),
    ...(polygon.lg && {
      lg: clipPadding(polygon.lg),
    }),
    ...(polygon.xl && {
      xl: clipPadding(polygon.xl),
    }),
  })}
      `;
    }

    // eslint-disable-next-line consistent-return
    return clipPadding(polygon);
  };
}
