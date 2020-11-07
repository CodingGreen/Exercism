//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const rnaMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

export const toRna = (dnaStrand) => {
  return dnaStrand
    .split('')
    .map(dnaNucleotide => rnaMap[dnaNucleotide])
    .join('')
};
