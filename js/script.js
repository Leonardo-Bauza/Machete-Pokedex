alert("Saludos y bienvenido al Machete-Pokedex. Esta web está destinada a filtrar de manera rápida TU colección y así saber qué Pokémon te falta por capturar. Cuando le des a aceptar se iniciará un cuestionario. Para responder 'SI' debes tocar el botón ACEPTAR. Para responder 'NO' debes tocar el botón CANCELAR. -Realiza todo el cuestionario, son solo 9 preguntas RÁPIDISIMAS!-");
const nombres = ['Bulbasaur', 'Ivysaur', 'Venusaur'];
const machos = [false, false, false];
const hembras = [false, false, false];
const atrapados = [];
const noAtrapados = [];
function preguntarPokemon(index) {
  let atrapado = confirm("¿Has atrapado a " + nombres[index] + "?");

  if (atrapado) {
    let macho = confirm("¿Has atrapado a " + nombres[index] + " macho?");
    let hembra = confirm("¿Has atrapado a " + nombres[index] + " hembra?");

    machos[index] = macho;
    hembras[index] = hembra;

    atrapados.push(index);
  } else {
    noAtrapados.push(index);
  }
}
for (let i = 0; i < nombres.length; i++) {
  preguntarPokemon(i);
}
function mostrarResultados() {
  let faltantes = [];

  for (let i of noAtrapados) {
    if (!machos[i]) {
      faltantes.push(nombres[i] + " macho");
    }
    if (!hembras[i]) {
      faltantes.push(nombres[i] + " hembra");
    }
  }

  for (let i of atrapados) {
    if (!machos[i]) {
      faltantes.push(nombres[i] + " macho");
    }
    if (!hembras[i]) {
      faltantes.push(nombres[i] + " hembra");
    }
  }

  if (faltantes.length > 0) {
    alert("Entrenador, te faltan por atrapar: " + faltantes.join(', ') + "!");
  } else {
    alert('¡Entrenador, has atrapado a todos los Pokémon y sus variantes!');
  }
}
mostrarResultados();
