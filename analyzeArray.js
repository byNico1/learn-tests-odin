export default function analyzeArray(array) {
  return {
    average: Math.round(
      array.reduce((total, value) => total + value, 0) / array.length
    ),
    min: array.reduce(
      (total, value) => (value > total ? total : value),
      array[0]
    ),
    max: array.reduce(
      (total, value) => (value > total ? value : total),
      array[0]
    ),
    length: array.length,
  };
}
