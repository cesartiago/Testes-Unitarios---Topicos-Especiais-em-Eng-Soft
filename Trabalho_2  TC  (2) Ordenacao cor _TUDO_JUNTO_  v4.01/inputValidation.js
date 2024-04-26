function validateInput(nums) {
  // Verificação de nulidade do array
  if (nums === null) {
    return "Array nulo";
  }

  // Verifica se o array é um objeto ou uma matriz
  if (!Array.isArray(nums)) {
    return "Você deve passar uma matriz";
  }

  // Verifica se o array está vazio
  if (nums.length === 0) {
    return "Array vazio";
  }

  // Verifica se todos os elementos do array são números
  if (!nums.every(num => typeof num === 'number')) {
    return "O array contém elementos que não são números";
  }

  // Verifica se todos os elementos do array são 0, 1 ou 2
  if (!nums.every(num => num === 0 || num === 1 || num === 2)) {
    return "O array contém elementos que não são 0, 1 ou 2";
  }

  // Verifica se o tamanho do array não excede 300
  if (nums.length > 300) {
  return "Tamanho máximo do array excedido";
}

  return true; // Retorna true para entradas válidas
}

module.exports = validateInput;
