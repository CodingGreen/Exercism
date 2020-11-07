//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const buildOutput = ({ output, currentCount, currentCharacter }) => {
  if (currentCount > 1) {
    return `${output}${currentCount}${currentCharacter}`
  }
  return `${output}${currentCharacter}`
}

export const encode = (code) => {
  const startingAccumulator = {
    currentCharacter: '',
    currentCount: 0,
    output: ''
  };

  const finalIteration = code.split('').reduce((accumulator, character) => {
    if (character === accumulator.currentCharacter) {
      return {
        ...accumulator,
        currentCount: accumulator.currentCount + 1
      }
    }

    return {
      currentCharacter: character,
      currentCount: 1,
      output: buildOutput(accumulator)
    }
  }, startingAccumulator);

  return buildOutput(finalIteration)
};

const rleMatcher = /\d*\D/g;

export const decode = (encodedValue) => {
  return Array.from(encodedValue.matchAll(rleMatcher))
    .reduce((accumulator, [rleMatch]) => {
      const character = rleMatch.substring(rleMatch.length - 1);

      if (rleMatch.length > 1) {
        const repeatTimes = Number(rleMatch.substring(0, rleMatch.length - 1))
        return `${accumulator}${character.repeat(repeatTimes)}`
      }

      return `${accumulator}${character}`
    }, '');
};