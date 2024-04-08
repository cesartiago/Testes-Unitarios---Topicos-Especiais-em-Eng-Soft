function letterCombinations(digits) {
  // Verificar se a entrada é uma string vazia
  if (digits === '') {
    return [];
  }

  // Verificar se a entrada contém caracteres não numéricos
  if (digits !== '' &&  !/^[2-9]+$/.test(digits)) {
    throw new Error('Input must contain only digits 2-9');
  }

  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  function generateCombinations(digits, index, combination, result) {
    if (index === digits.length) {
      result.push(combination);
      return;
    }

    const letters = digitToLetters[digits[index]];
    // Verificar se o dígito é válido
    if (!letters) {
      return;
    }

    for (const letter of letters) {
      generateCombinations(digits, index + 1, combination + letter, result);
    }
  }

  const result = [];
  generateCombinations(digits, 0, '', result);
  return result;
}

// Exportar apenas a função letterCombinations
module.exports = letterCombinations;
