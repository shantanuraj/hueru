/**
 * Color cycle animation helper
 */

import {
  COLOR_CYCLE,
} from '../config/colors';

const getPulseAnimation = () => {
  const length = COLOR_CYCLE.length - 1;
  return COLOR_CYCLE
    .map((color, i) => `
    ${Math.floor(i / length * 100)}% {
      fill: ${color};
    }`)
    .join('\n');
};

export default getPulseAnimation;
