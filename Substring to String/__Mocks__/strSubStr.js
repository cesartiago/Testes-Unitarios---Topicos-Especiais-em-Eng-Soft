
const isSubstringAtIndex = require('./isSubstringAtIndex');

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

module.exports =  strSubStr ;
