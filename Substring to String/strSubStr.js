/** Funçaõ auxiliar
 * Verifica se a substring é encontrada em um determinado índice da haystack.
 * @param {string} haystack - A string principal.
 * @param {string} needle - A substring a ser procurada.
 * @param {number} index - O índice onde verificar a substring.
 * @returns {boolean} Retorna true se a substring for encontrada no índice especificado, caso contrário, retorna false.
 */
function isSubstringAtIndex(haystack, needle, index) {
    for (let i = 0; i < needle.length; i++) {
        if (haystack[index + i] !== needle[i]) {
            return false;
        }
    }
    return true;
}

/**
 * Busca uma substring na haystack.
 * @param {string} haystack - A string principal.
 * @param {string} needle - A substring a ser procurada.
 * @returns {number} Retorna o índice da primeira ocorrência da substring na haystack, ou -1 se a substring não for encontrada.
 */
function strSubStr(haystack, needle) {
    if (needle === '') return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (isSubstringAtIndex(haystack, needle, i)) {
            return i;
        }
    }

    return -1;
}

module.exports = strSubStr;
