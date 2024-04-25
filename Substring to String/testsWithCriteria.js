const fs = require('fs');
const path = require('path');
const existingTestCases = require('./testCasesForSubstr.json');

const testCases = [
    // Particionamento de Equivalência
    // Caso 1: Needle vazio
    { haystack: "abcdef", needle: "", expected: 0 },
    // Caso 2: Needle não encontrado
    { haystack: "abcdef", needle: "xyz", expected: -1 },
    // Caso 3: Needle encontrado no início da haystack
    { haystack: "abcdef", needle: "abc", expected: 0 },
    // Caso 4: Needle encontrado no meio da haystack
    { haystack: "abcdef", needle: "cde", expected: 2 },
    // Caso 5: Needle encontrado no final da haystack
    { haystack: "abcdef", needle: "def", expected: 3 },

    // Análise do Valor Limite
    // Caso 6: Needle encontrado no primeiro caractere da haystack
    { haystack: "a", needle: "a", expected: 0 },
    // Caso 7: Needle encontrado no último caractere da haystack
    { haystack: "abcdef", needle: "f", expected: 5 },
    // Caso 8: Haystack vazia
    { haystack: "", needle: "abc", expected: -1 },

    // Grafo Causa-Efeito
    // Caso 9: Needle encontrado na haystack com repetição de caracteres
    { haystack: "abcabc", needle: "bca", expected: 1 },
    // Caso 10: Needle não encontrado em uma haystack grande
    { haystack: "a".repeat(1000000), needle: "b", expected: -1 },

    // Error Guessing
    // Caso 11: Caracteres especiais na haystack
    { haystack: "!@#$%^&*", needle: "^&", expected: 5 },
    // Caso 12: Caracteres especiais na needle
    { haystack: "abcdef", needle: "!@#", expected: -1 },
    // Caso 13: Caso com múltiplas ocorrências da needle na haystack
    { haystack: "ababcabc", needle: "abc", expected: 2 },
    // Caso 14: Teste com haystack e needle iguais
    { haystack: "abcdef", needle: "abcdef", expected: 0 },
    // Caso 15: Needle com apenas um caractere
    { haystack: "abcdef", needle: "d", expected: 3 },
    // Caso 16: Needle com mais caracteres que a haystack
    { haystack: "abc", needle: "abcdef", expected: -1 },
    // Caso 17: Teste com haystack e needle sendo a mesma string vazia
    { haystack: "", needle: "", expected: 0 },
    // Caso 18: Teste com haystack e needle iguais, mas haystack sendo uma substring de outra
    { haystack: "def", needle: "def", expected: 0 },
    // Caso 19: Teste com haystack grande e needle pequena
    { haystack: "a".repeat(1000000), needle: "a", expected: 0 },
    // Caso 20: Teste com haystack grande e needle grande
    { haystack: "a".repeat(1000000), needle: "a".repeat(100), expected: 0 },
];

// Combinar casos de teste existentes com os novos casos de teste
const combinedTestCases = [...existingTestCases, ...testCases];

fs.writeFileSync(path.resolve('testCasesForSubstr.json'), JSON.stringify(combinedTestCases, null, 2));
