// 2- CATALOGO DE MUSICA
// Tenemos un array de bandas o autores de música, p.ej. de rock, de pop, de jazz…

// Menú de opciones CRUD:

// - Opción de borrar el primero (.unshift() ) ok
// - Opción de borrar el último (.pop() ) ok
// - Opción de borrar o cambiar, añadir un índice determinado (.splice())
// - Opción de buscar un grupo y que te diga el índice (.indexOf() )

// - Opción de mostrar uno según su índice

// - opción de mostrar todos mediante .foreach()

// No hace falta hacerlo visual de momento.

// +EXTRA: Podemos hacer un bucle que nos permita ir añadiendo bandas, mediante (.push() ), hasta que [condición se cumpla]

// +EXTRA: A quien le dé tiempo, que cree funciones, una para cada cosa

const artistas = [];
let veces = 0;

function añadir() {
  const artistasInput = document.getElementById("grupoMusica");
  const artistasInputValor = artistasInput.value.toLowerCase();
  let error = document.querySelector(".error-5");

  if (artistasInputValor !== "" && veces < 5) {
    artistas.push(artistasInputValor);
    veces++;
    console.log(artistasInputValor);
    artistasInput.value = "";
  } else if (veces >= 5) {
    error.style.display = "block";
    artistasInput.value = "";
  } else {
    alert("Introduce un nombre de un artista");
  }
}

function crear() {
  let playlistArtistasCrear = document.querySelector(".playlist");

  for (let i = 0; i < artistas.length; i++) {
    playlistArtistasCrear.innerHTML += artistas[i] + "<br>";
    playlistArtistasCrear.style.fontFamiliy = "Arial";
    playlistArtistasCrear.style.fontWeight = "bold";
    playlistArtistasCrear.style.fontSize = "xx-large";
    playlistArtistasCrear.style.color = "green";
    playlistArtistasCrear.style.textAlign = "center";
    playlistArtistasCrear.style.display = "flex";
    playlistArtistasCrear.style.justifyContent = "center";
    playlistArtistasCrear.style.alignItems = "center";
  }
}

function anyadirMas() {
  const nuevoArtistaInput = document.getElementById("nuevoArtista");
  const nuevoArtistaInputValor = nuevoArtistaInput.value.toLowerCase();

  let playlistArtistasAñadir = document.querySelector(".playlist");

  playlistArtistasAñadir.innerHTML = "";

  if (nuevoArtistaInputValor !== "") {
    artistas.splice(3, 0, nuevoArtistaInputValor);
    console.log(nuevoArtistaInputValor);
    nuevoArtistaInput.value = "";
    crear();
  } else {
    alert("Introduce un nombre de un artista");
  }
}

function borrar() {
  let playlistArtistasBorrar = document.querySelector(".playlist");

  playlistArtistasBorrar.innerHTML = "";

  if (artistas.length > 0) {
    artistas.shift();
    crear();
  }
}

function borrarUltimo() {
  let playlistArtistasBorrarUltimo = document.querySelector(".playlist");

  playlistArtistasBorrarUltimo.innerHTML = "";

  if (artistas.length > 0) {
    artistas.pop();
    crear();
  }
}

