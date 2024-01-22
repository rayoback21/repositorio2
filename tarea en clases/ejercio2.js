'use strict';

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let nombreIngresado = prompt("Ingresa un nombre:");
if (students.find(nombre => nombre === nombreIngresado)) {
  alert(El nombre ${nombreIngresado} se encuentra en la lista.);
} else {
  alert(El nombre ${nombreIngresado} no se encuentra en la lista.);
}

let phrase = "La programación web es fundamental para el progreso";
let palabras = phrase.split(" ");
alert(palabras);
alert(La frase tiene ${palabras.length} palabras.);

let palabrasMasDe3Letras = palabras.filter(palabra => palabra.length > 3);
alert(Palabras con más de 3 letras: ${palabrasMasDe3Letras.join(", ")});
