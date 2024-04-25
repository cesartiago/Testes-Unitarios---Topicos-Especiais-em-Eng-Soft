
# Encontre o Índice da Primeira Ocorrência em uma String

- Este é um problema que envolve encontrar o índice da primeira ocorrência de uma determinada substring em uma string maior.

Detalhes do problema:

- Dadas duas strings `needle` e `haystack`, retorne o índice da primeira ocorrência de `needle` em `haystack`, ou -1 se `needle` não for encontrado em `haystack`.
- [Link para o problema no LeetCode](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)

## Casos de Teste

### Particionamento de Equivalência

| Caso de Teste | `Haystack` | `Needle` | Saída Esperada |
| --------------| -----------| ---------| ---------------|
| 1             | "abcdef"   | ""       | 0              |
| 2             | "abcdef"   | "xyz"    | -1             |
| 3             | "abcdef"   | "abc"    | 0              |
| 4             | "abcdef"   | "cde"    | 2              |
| 5             | "abcdef"   | "def"    | 3              |

### Análise do Valor Limite

| Caso de Teste | `Haystack` | `Needle` | Saída Esperada |
| --------------| -----------| ---------| ---------------|
| 6             | "a"        | "a"      | 0              |
| 7             | "abcdef"   | "f"      | 5              |
| 8             | ""         | "abc"    | -1             |

### Grafo Causa-Efeito

| Caso de Teste | `Haystack`                     | `Needle` | Saída Esperada |
| --------------| ------------------------------| ---------| ---------------|
| 9             | "abcabc"                       | "bca"    | 1              |
| 10            | "a" repetido 1,000,000 vezes   | "b"      | -1             |

### Error Guessing

| Caso de Teste | `Haystack` | `Needle` | Saída Esperada |
| --------------| -----------| ---------| ---------------|
| 11            | "!@#$%^&*" | "^&"     | 5              |
| 12            | "abcdef"   | "!@#"    | -1             |
| 13            | "ababcabc" | "abc"    | 2              |
| 14            | "abcdef"   | "abcdef" | 0              |
| 15            | "abcdef"   | "d"      | 3              |
| 16            | "abc"      | "abcdef" | -1             |

Além disso, foram realizados outros testes aleatórios.


Para executar o projeto, siga estes passos:

1. Clone o repositório.
2. Navegue até a pasta "Substring to String" com `cd`.
3. Execute `npm install`.
4. Em seguida, execute `node gerarTestes.js` e depois `node testsWithCriteria.js`. Se preferir, você pode pular esta etapa, pois os dados de teste já estarão disponíveis.
5. Por fim, execute `npm test`.


Créditos a [Helon de França](https://github.com/helonfranca) e [Tiago César](https://github.com/cesartiago).
