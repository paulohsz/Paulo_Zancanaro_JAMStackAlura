import { css } from 'styled-components';
import breakpointsMedia from '@theme/utils/breakpointsMedia';

export default function polygonClip(propName) {
  return (props) => {
    const polygon = props[propName];

    const clipPadding = (size) => {
      if (propName === 'polygonBottom') {
        return {
          clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - ${size}px))`,
          paddingBottom: size,
        };
      }

      return {
        clipPath: `polygon(0 0, 100% ${size}px, 100% 100%, 0 100%)`,
        paddingTop: size,
      };
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
