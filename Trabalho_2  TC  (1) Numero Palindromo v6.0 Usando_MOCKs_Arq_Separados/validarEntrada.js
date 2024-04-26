function validarEntrada(input) {
  // Verifica se a entrada é uma string vazia
  if (input === '') {
    return 'Entrada inválida: string vazia não é permitida.';
  }

  // Verifica se a entrada é um número
  if (isNaN(input)) {
    return 'Entrada inválida: apenas números inteiros são aceitos.';
  }

  // Verifica se a entrada é um número inteiro e não flutuante
  if (!Number.isInteger(input) && !Number.isNaN(input)) {
    return 'Entrada inválida: apenas números inteiros são aceitos.';
  }

  // Se todas as validações forem bem-sucedidas, retorna true
  return true;
}

module.exports = validarEntrada;
