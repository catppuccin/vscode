import tinycolor = require("tinycolor2");

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
export const opacity = (color: string, opacity: number): string =>
  tinycolor(color).setAlpha(opacity).toHex8String();

/**
 * @param {string} color 6-character hex color, like "#FF69B4".
 * @param {number} magnitude represents the magnitude by which hexColor should be lightened or darkened. value between 0 and 1.
 * @returns {string} returns the lightened or darkened color.
 */
export const shade = (color: string, magnitude: number): string =>
  magnitude > 0
    ? tinycolor(color)
        .lighten(magnitude * 100)
        .toHexString()
    : tinycolor(color)
        .darken(Math.abs(magnitude * 100))
        .toHexString();

export const mix = (color1: string, color2: string, weight: number): string =>
  tinycolor.mix(color1, color2, weight).toHexString();

export const transparent = "#00000000";
