<h4>Objetivos de Aprendizaje</h4>

<ul>
  <li>Aprender el uso del operador typeof, lo que permite identificar los tipos de datos almacenados en las variables de JavaScript.
<li>Aprender a utilizar la función filter de los arrays (listas) para quitar los elementos que no queremos. Esto es especialmente útil cuando trabajamos con listados y queremos darle la posibilidad a los usuarios de realizar búsquedas.
<li>Aprender a utilizar la función sort de los arrays (listas) para ordenar los elementos que almacena. Esto es útil para facilitarle al usuario la posibilidad de visualizar datos ordenados siguiendo algún determinado criterio.
</li>
</ul>

<h4>Pautas</h4>

<p>Adjunto encontrarás una página web que recorre un array y muestra sus elementos en pantalla, el problema es que se nos han colado algunos elementos de tipos extraños, los cuales debemos filtrar, para luego mostrar sólo los elementos de tipo String ordenados alfabéticamente.
<p>Realiza el código necesario para cumplir con el requerimiento anteriormente descrito y comparte tu solución en el foro.
</p>

<h4>Respuestas</h4>

<p>Luego de realizada la actividad del taller responde y comparte las respuestas a las siguientes preguntas:</p>

<ol>
<li>¿Qué función te permitió filtrar los elementos "extraños" del array? Explica.
  <p>La función filter, la cual filtra los elementos indicados en la condición y para aquellos cuya condición se cumpla (da como resultado true), devuelve un array con los mismos.</p>
<li>¿Cómo detectaste el tipo de dato de cada elemento del array? Explica.
  <p>Utilicé el typeof, un operador que devuelve el tipo de dato que se encuentra en una cadena. Al indicarle al filter que cada elemento debía coincidir con que el resultado de typeof diese string,
  conseguí que me devolviese los mismos</p>
<li>¿Has notado que algunas funciones parecen "flechas"? Busca información sobre "funciones flechas" y describe su sintaxis.
  <p>Es una forma más compacta de crear una función anónima. Se evalúa la expresion del lado derecho dados los parámetros del lado izquierdo. </p>
<li>¿Qué función te permitió ordenar el array alfabéticamente? Explica.
  <p>Utilicé la función sort, comparando los elemento a y b de la lista ya filtrada con el typeof,comparando los elementos a y b. Utilicé localeCompare, comparando a con b, ambos en lowercase para que no perjudique el orden según mayúsculas o minúsculas. </p>
<li>Investiga otra función de los arrays que consideres útil y comparte en qué situaciones se puede utilizar.
  <p>El método includes() evalúa el array y según el argumento que se le dé, devuelve true o false según si ese elemento exacto se encuentra o no en el array.</p>
</li>
</ol> 
