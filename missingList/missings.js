let missingStorage = localStorage.getItem("showMissingPokemon");
missingStorage = JSON.parse(missingStorage) || [];

let missingContainer = document.getElementById("pokemon-container");

function renderMissingContainer(MissingPokemonArray) {;
    missingContainer.innerHTML = '';
    MissingPokemonArray.forEach(pokemon => {;
        const pokemonCard = document.createElement("div");
        pokemonCard.className = 'pokemon-card'
        pokemonCard.innerHTML = `<h3>${pokemon.name}</h3>
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
                                <label>
                                    <label> <input type="checkbox" id="${pokemon.id}-male" ${userData[`${pokemon.id}-male`] ? 'checked' : ''}>♂
                                    </label>
                                    <label> <input type="checkbox" id="${pokemon.id}-female" ${userData[`${pokemon.id}-female`] ? 'checked' : ''}>♀
                                    </label>
                                </label>
                                <a class="eliminateSelected" id="${pokemon.id}">Quitar </a>`
        missingContainer.appendChild(pokemonCard);
    });
    eraseMissing(missingStorage);
};
const userData = JSON.parse(localStorage.getItem('userData')) || {};

// Funcion para Eliminar del Carrito
function eraseMissing() {;
    const eraseButton = document.querySelectorAll(".eliminateSelected");
    eraseButton.forEach(button => (
        button.onclick = (e) => {;
            const pokemonId = e.currentTarget.id;
            missingStorage = missingStorage.filter(pokemon => pokemon.id.toString() !== pokemonId);
            localStorage.setItem("showMissingPokemon", JSON.stringify(missingStorage));
            renderMissingContainer(missingStorage);
            Toastifier("Eliminado");
        }
    ));  
};

renderMissingContainer(missingStorage);

// Función para eliminar todos los datos de localStorage
const clearLocalStorage = () => {;
    localStorage.clear();
    missingStorage = [];
    renderMissingContainer(missingStorage);
    Toastifier("Listado vaciado");
  };
  document.getElementById('deleteAll').addEventListener('click', clearLocalStorage);

    /* Librería Toastify */
  function Toastifier(message) {
    Toastify({
    text: message,
    duration: 4000,
    destination: "./missings.html",
    newWindow: false,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #101010, #FE2020, #001100)",
      color: "white",
    },
    onClick: function(){
    } // Callback after click
    }).showToast();
  }
