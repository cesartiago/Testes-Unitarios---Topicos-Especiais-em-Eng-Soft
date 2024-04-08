function isPalindrome(input) {
  // Verifica se a entrada é uma string vazia
  if (input === '') {
    return 'Entrada inválida: string vazia não é permitida.';
  }

  // Verifica se a entrada é um número
  if (isNaN(input)) {
    return 'Entrada inválida: apenas números inteiros são aceitos.';
  }

  // Converte a entrada para string para facilitar a manipulação
  const numberString = input.toString();

  // Verifica se o número é negativo ou termina em zero (exceto o próprio zero)
  if (numberString[0] === '-' || (numberString[numberString.length - 1] === '0' && numberString !== '0')) {
    return false;
  }

  // Verifica se a entrada é um número inteiro
  if (!Number.isInteger(input)) {
    return 'Entrada inválida: apenas números inteiros são aceitos.';
  }

  // Chama a função auxiliar para inverter o número
  const reversedNumber = reverseNumber(numberString);

  // Retorna true se o número original for igual ao número invertido
  return numberString === reversedNumber;
}

function reverseNumber(numberString) {
  let reversedNumber = '';
  for (let i = numberString.length - 1; i >= 0; i--) {
    reversedNumber += numberString[i];
  }
  return reversedNumber;
}

// Para um só seria: module.exports = isPalindrome;
// Exporta as funções sortColors e swap
module.exports = {
  isPalindrome,
  reverseNumber

};
