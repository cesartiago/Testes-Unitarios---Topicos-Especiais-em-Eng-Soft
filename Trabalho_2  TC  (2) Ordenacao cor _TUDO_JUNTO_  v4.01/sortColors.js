const validateInput  = require('./inputValidation');

function sortColors(nums) {
  // Validação de entrada
  const isValidInput = validateInput(nums);
  if (isValidInput !== true) {
    return isValidInput; // Retorna mensagem de erro da validação
  }

  else {

  // Se a entrada for válida, então prosseguimos com a ordenação
    let left = 0; // O início da seção branca
    let right = nums.length - 1; // O fim da seção branca
    let current = 0; // Índice do elemento atual que está sendo processado

    // Lógica principal de ordenação
    while (current <= right) {
      

      switch (nums[current]) {
        // Caso 1: Elemento vermelho (valor 0)
        case 0:
          // Trocar o elemento vermelho com o elemento no início da seção branca
          [nums[current], nums[left]] = [nums[left], nums[current]];
          // Incrementar o índice do início da seção branca e o índice atual
          left++;
          current++;
          // Sair do switch
          break;

        // Caso 2: Elemento azul (valor 2)
        case 2:
          // Trocar o elemento azul com o elemento no final da seção branca
          [nums[current], nums[right]] = [nums[right], nums[current]];
          // Decrementar o índice do fim da seção branca
          right--;
          // Sair do switch
          break;

        // Caso 3: Elemento branco (valor 1) ou outro valor não tratado
        default:
          // O elemento já está na posição correta, então apenas incrementa o índice atual
          current++;
          break;
      } // Fim do switch
    } // Fim do while

  // Retorna o array ordenado
  return nums;
  }


}

module.exports = sortColors;

validateInput

// Teste da função
//console.log(sortColors([0,1,2.5])); // Deve imprimir mensagem de erro
// console.log(sortColors([0,1,2])); // OK
// console.log(sortColors(1)); // Você deve passar uma matriz