// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);

  //Alojo todos los elementos del strangeArray que sean del tipo string en una variable soloStrings
  let soloStrings =  strangeArray.filter(elemento => typeof elemento === "string")

  /* Ordeno con sort, comparando los elementos a y b del arrayFiltrado. Uso localeCompare, que retorna un número indicando cuál string
  viene antes y cuál después, comparando a con b, ambos en lowercase para que no perjudique el orden según mayúsculas o minúsculas. */

  let arrayFiltrado = soloStrings.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))


  /* Uso la función showList para mostrar en el html el resultado del array, solo strings ordenados alfabéticamente sin importar
  mayúsculas y minúsculas */
  
  showList(arrayFiltrado);

});
