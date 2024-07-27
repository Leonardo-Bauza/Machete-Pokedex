let cartStorage = localStorage.getItem("showMissingPokemon");
cartStorage = JSON.parse(cartStorage) || [];

let cartContainer = document.getElementById("pokemon-container");

function renderCarrito(carritoPokemon) {;
    cartContainer.innerHTML = '';
    carritoPokemon.forEach(pokemon => {;
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
                                <button class="eliminateSelected" id="${pokemon.id}">Quitar </button>`
        cartContainer.appendChild(pokemonCard);
    });
    eraseMissing(cartStorage);
};
const userData = JSON.parse(localStorage.getItem('userData')) || {};

// Funcion para Eliminar del Carrito
function eraseMissing() {;
    const addButton = document.querySelectorAll(".eliminateSelected");
    addButton.forEach(button => (
        button.onclick = (e) => {;
            const pokemonId = e.currentTarget.id;
            cartStorage = cartStorage.filter(pokemon => pokemon.id.toString() !== pokemonId);
            localStorage.setItem("showMissingPokemon", JSON.stringify(cartStorage));
            renderCarrito(cartStorage);
        } 
    ));  
};

renderCarrito(cartStorage);

// Función para eliminar todos los datos de localStorage
const clearLocalStorage = () => {;
    localStorage.clear();
    pokemonList = [];
    renderList(pokemonList);
  };
  document.getElementById('deleteAll').addEventListener('click', clearLocalStorage);