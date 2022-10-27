export const capitalize = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.substring(1);
};

export const opacity = (color: string, opacity: number): string => {
  const opacityHex = Math.floor(255 * opacity);
  return `${color}${opacityHex.toString(16)}`;
};

export const transparent = "#00000000";
