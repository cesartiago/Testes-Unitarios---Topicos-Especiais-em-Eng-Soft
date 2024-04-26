const validarEntrada = require('./validarEntrada');

function isPalindrome(input) {
  // Chama a função validarEntrada para verificar a entrada antes de continuar
  const validationResult = validarEntrada(input);
  if (validationResult !== true) {
    return validationResult; // Retorna mensagem de erro da validação
  }

  // Converte a entrada para string para facilitar a manipulação
  const numberString = input.toString();

  // Verifica se o número é negativo ou termina em zero (exceto o próprio zero - e zeros contínuos)
  // ATENÇÃO, ALTERAÇÃO: 24/04/24
  if (numberString[0] === '-' || (numberString[numberString.length - 1] === '0' && numberString !== '0' && !/^0+$/.test(numberString))) {
    return false;
  }

  // Inverte a string do número
  const reversedString = numberString.split('').reverse().join('');

  // Retorna true se o número original for igual ao número invertido
  return numberString === reversedString;
}

module.exports = isPalindrome;
