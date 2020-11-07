//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

// From previous exercise
const colorCode = (colour) => {
  return COLORS.indexOf(colour);
};

export const decodedValue = (inputColours) => {
  const colourCodeString = inputColours
    .slice(0, 2)
    .map(colorCode)
    .join('');

  return Number(colourCodeString);
};