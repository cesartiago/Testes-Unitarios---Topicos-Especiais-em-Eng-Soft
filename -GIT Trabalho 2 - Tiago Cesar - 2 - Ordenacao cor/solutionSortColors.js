function sortColors(nums) {
  // Verificação de nulidade do array
  if (nums === null) {
    throw new Error("Array nulo");
  }

  // Verifica se o array é um objeto
  if (typeof nums !== "object") {
    throw new Error("Array não é um objeto");
  }

  // Verifica se o array está vazio
  if (nums.length === 0) {
    throw new Error("Array vazio");
  }

  let left = 0; // O início da seção branca
  let right = nums.length - 1; // O fim da seção branca
  let current = 0; // Índice do elemento atual que está sendo processado

  // Loop principal que percorre o array enquanto o índice atual é menor ou igual ao índice do fim da seção branca
  while (current <= right) {

    // Verificação do valor do elemento atual:
    if (nums[current] < 0 || nums[current] > 2) {
      throw new Error("Elemento fora da faixa");
    }

    switch (nums[current]) {

      // Caso 1: Elemento vermelho (valor 0)
      case 0:
        // Trocar o elemento vermelho com o elemento no início da seção branca
        swap(nums, current, left);
        // Incrementar o índice do início da seção branca e o índice atual
        left++;
        current++;
        // Sair do switch
        break;

      // Caso 2: Elemento azul (valor 2)
      case 2:
        // Trocar o elemento azul com o elemento no final da seção branca
        swap(nums, current, right);
        // Decrementar o índice do fim da seção branca
        right--;
        // Sair do switch
        break;

      // Caso 3: Elemento branco (valor 1) ou outro valor não tratado
      default:
        // O elemento já está na posição correta, então apenas incrementa o índice atual
        current++;

    } // Fim do switch
  } // Fim do while

  // Retorna o array ordenado
  return nums;
}

// Função auxiliar para trocar dois elementos em um array
function swap(arr, i, j) {
  // Verificação de nulidade do array
  if (arr === null) {
    throw new Error('Array nulo');
  }

  // Verificação se o array é um objeto
  if (typeof arr !== 'object') {
    throw new Error('Array não é um objeto');
  }

  // Verificação se o array está vazio
  if (arr.length === 0) {
    throw new Error('Array vazio');
  }

  // Validação dos índices
  if (i < 0 || i >= arr.length) {
    throw new Error('Índice fora da faixa');
  }
  if (j < 0 || j >= arr.length) {
    throw new Error('Índice fora da faixa');
  }

  // Troca dos elementos
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Exporta as funções sortColors e swap
module.exports = {
  sortColors,
  swap
};
