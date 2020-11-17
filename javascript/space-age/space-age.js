//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const secondsInEarthYear = 31557600

const orbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

const orbitalPeriodsInSeconds = Object.entries(orbitalPeriods).reduce((accumulator, [planet, orbitalPeriod]) => ({
  ...accumulator,
  [planet]: orbitalPeriod * secondsInEarthYear
}), {})

const roundToDecimalPlaces = (number, decimalPlaces) => {
  const multiplier = 10 ** decimalPlaces;
  return Math.round(number * multiplier) / multiplier;
}

export const age = (planet, ageInSeconds) => {
  const ageInPlanetYears = ageInSeconds / orbitalPeriodsInSeconds[planet]
  return roundToDecimalPlaces(ageInPlanetYears, 2)
};
