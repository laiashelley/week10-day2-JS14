const animalesZoo = ["Jirafa", "Leon", "Hipopotamo", "Tigre", "Zebra"];

console.log(animalesZoo);

animalesZoo.push("Pinguino");

animalesZoo.push("Lemur");

console.log("Total de animales en el zoo: " + animalesZoo.length);

animalesZoo[3] = "Elefante";

// El array usado en el ejercicio 1 de ayer (zoo), en vez de leerlo del primer elemento al último, debes crear
// un bucle que lo lea al revés, o sea, que primero muestre el último, y al final, el primero, y lo muestre
// por consola o pantalla.

for (let i = animalesZoo.length; i >= 0; i--) {
  console.log(animalesZoo[i]);
}

// let i = animalesZoo.length hace que empiece al final de la longitud del array; i>=0 es que el valor de i sea mayor o igual a 0 i se haga el incremento al revés con el i--.