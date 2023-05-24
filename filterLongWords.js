/**
 * Queremos filtrar el siguiente texto, y quedarnos solo con las palabras que son más largas de 'n' carácteres
 *
 * @param {string} sentence Un texto cualquiera
 * @param {number} n El tamaño mínimo de la palabra a filtrar
 */


function filterLongWords(sentence, n) {

let text = sentence.split(" ");
 filterWords = text.filter((word) => word.length >= n)

 return (filterWords)

  // 1. Aplicar el método split per transformar 'sentence' en un array de paraules https://www.w3schools.com/jsref/jsref_split.asp

  // 2. Hacer servir adecuadamente el método filter para quedarte solo con las palabras que tienen 'n' o más carácteres
}

console.log(filterLongWords("jon is a fast brown guy and he jumps quick", 4), [
  "quick",
  "brown",
  "jumps",
]);
