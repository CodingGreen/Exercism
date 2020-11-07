//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECOND_IN_MS = (10 ** 9) * 1000

export const gigasecond = (date) => {
  const milliseconds = date.getTime()
  return new Date(milliseconds + GIGASECOND_IN_MS)
};
