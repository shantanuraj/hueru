/**
 * Color cycle animation helper
 */
const getPulseAnimation = (colors) => {
  const length = colors.length - 1;
  return colors
    .map((color, i) => `
    ${Math.floor(i / length * 100)}% {
      fill: ${color};
    }`)
    .join('\n');
};

export default getPulseAnimation;
