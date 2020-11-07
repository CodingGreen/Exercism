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

export const toRoman = (number) => {
  const valueToSubtract = romanSymbols.find(([value]) => value <= number)
  if (valueToSubtract) {
    const [numberToSubtract, symbol] = valueToSubtract
    const accumulator = toRoman(number - numberToSubtract)
    return `${accumulator}${symbol}`
  }
  return ''
};
