import tinycolor from "tinycolor2";

/**
 * @param {string} color1 6-character hex color, like "#FF69B4".
 * @param {string} color2 6-character hex color, like "#FF69B4".
 * @param {number} amount ratio of color1 to color2. value between 0 and 1.
 * @returns {string} returns the mixed color.
 */
export const mix = (color1: string, color2: string, amount: number): string =>
  tinycolor.mix(color1, color2, amount * 100).toHexString();

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

export const transparent = "#00000000";
