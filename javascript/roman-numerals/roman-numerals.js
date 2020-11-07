// Must be in size order
const romanSymbols = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]

const toRomanRecursive = (accumulator, numberLeft) => {
  const valueToSubtract = romanSymbols.find(([value]) => value <= numberLeft)
  if (valueToSubtract) {
    const [numberToSubtract, symbol] = valueToSubtract
    return toRomanRecursive(`${accumulator}${symbol}`, numberLeft - numberToSubtract)
  }
  return accumulator
}

export const toRoman = (number) => {
  return toRomanRecursive('', number)
};
