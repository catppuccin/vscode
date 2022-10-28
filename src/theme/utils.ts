/**
 * @param {string} s String to capitalize
 * @returns {string} returns the String with the first character uppercased.
 */
export const capitalize = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.substring(1);
};

/**
 * @param {string} color 6-character hex color, like "#FF69B4".
 * @param {number} opacity how much opacity to apply. value between 0 and 1.
 * @returns {string} color with the specified opacity, hex-encoded.
 */
export const opacity = (color: string, opacity: number): string => {
  opacity = Math.floor(255 * opacity);
  color = color.replace(`#`, ``);

  if (color.length === 6) {
    return `#${color}${opacity.toString(16)}`;
  } else {
    return color;
  }
};

/**
 * @param {string} color 6-character hex color, like "#FF69B4".
 * @param {number} magnitude represents the magnitude by which hexColor should be lightened or darkened. value between 0 and 1.
 * @returns {string} returns the lightened or darkened color.
 */
// adapted from https://natclark.com/tutorials/javascript-lighten-darken-hex-color/
export const shade = (color: string, magnitude: number): string => {
  magnitude = Math.round(magnitude * 100);
  color = color.replace(`#`, ``);

  if (color.length === 6) {
    const decimalColor = parseInt(color, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return color;
  }
};

export const transparent = "#00000000";
