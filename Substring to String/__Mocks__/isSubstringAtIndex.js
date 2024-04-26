
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

module.exports = isSubstringAtIndex ;