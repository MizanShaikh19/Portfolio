/**
 * HSL Color Cycler
 * Generates HSL color strings based on a hue value that cycles 0-360
 */

export const generateHSL = (hue) => `hsl(${hue}, 100%, 50%)`;

export const getCycleColors = (hue) => {
    return {
        primary: generateHSL(hue),
        secondary: generateHSL((hue + 30) % 360),
        tertiary: generateHSL((hue + 60) % 360),
        background: '#0A0E27'
    };
};
