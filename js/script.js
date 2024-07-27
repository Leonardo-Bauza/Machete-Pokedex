// Inicializar pokemonList como un array vacío
let pokemonList = [];

// Cargar los datos de Pokémon
fetch("./db/data.JSON")
  .then(response => response.json())
  .then(data => {;
    pokemonList = data;
    renderList(pokemonList);
  })
  .catch(error => console.error('Error fetching Pokémon data:', error));

// Función para guardar los datos del usuario en localStorage
  const saveUserData = () => {;
  const userData = {};
  pokemonList.forEach(pokemon => {;
    const maleCheckbox = document.getElementById(`${pokemon.id}-male`);
    const femaleCheckbox = document.getElementById(`${pokemon.id}-female`);
    if (maleCheckbox) userData[`${pokemon.id}-male`] = maleCheckbox.checked;
    if (femaleCheckbox) userData[`${pokemon.id}-female`] = femaleCheckbox.checked;
  });
  localStorage.setItem('userData', JSON.stringify(userData));
};

// Inicializar el estado de los checkboxes desde localStorage
const initializeCheckboxes = () => {;
  const userData = JSON.parse(localStorage.getItem('userData')) || {};
    pokemonList.forEach(pokemon => {;
    const maleCheckbox = document.getElementById(`${pokemon.id}-male`);
    const femaleCheckbox = document.getElementById(`${pokemon.id}-female`);
    
    if (maleCheckbox) {;
      maleCheckbox.checked = userData[`${pokemon.id}-male`] || false;
      maleCheckbox.addEventListener('change', saveUserData);
    }
    if (femaleCheckbox) {;
      femaleCheckbox.checked = userData[`${pokemon.id}-female`] || false;
      femaleCheckbox.addEventListener('change', saveUserData);
    };
  });
};

// Función para renderizar la lista de Pokémon
function renderList(pokemonArray) {;
  const pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.innerHTML = ''; // Limpiar el contenedor
  pokemonArray.forEach(pokemon => {;
    const pokemonCard = document.createElement("div");
    pokemonCard.className = 'pokemon-card';
    pokemonCard.innerHTML = `
      <h3>${pokemon.name}</h3>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
      <label>  
      <label>
            <input type="checkbox" id="${pokemon.id}-male">♂
        </label>
        <label>
            <input type="checkbox" id="${pokemon.id}-female">♀
        </label>
        </label>
      <a class="selectPokemon" id="${pokemon.id}">Agregar</a>`;
    pokemonContainer.appendChild(pokemonCard);
  });

  addMissing(); // Llamar a la función addMissing después de renderizar
  initializeCheckboxes(); // Inicializar los checkboxes después de renderizar
};

// Función para manejar la adición de Pokémon al carrito
function addMissing() {;
  let showMissingPokemon = JSON.parse(localStorage.getItem('showMissingPokemon')) || [];
  const addButton = document.querySelectorAll(".selectPokemon");
  addButton.forEach(button => {;
    button.onclick = (e) => {;
      const pokemonId = e.currentTarget.id;
      const selectedPokemon = pokemonList.find(pokemon => pokemon.id == pokemonId);
      if (selectedPokemon && !showMissingPokemon.some(pokemon => pokemon.id === selectedPokemon.id)) {;
        showMissingPokemon.push(selectedPokemon);
        showMissingPokemon.sort((a, b) => a.id - b.id);
        localStorage.setItem("showMissingPokemon", JSON.stringify(showMissingPokemon));
        Toastifier(`${selectedPokemon.name} es faltante`);
      };
    };
  });
};

// Función para eliminar todos los datos de localStorage
const clearLocalStorage = () => {;
    localStorage.clear();
    pokemonList = [];
    renderList(pokemonList);
  };
  document.getElementById('deleteAll').addEventListener('click', clearLocalStorage);


  /* Librería Toastify */
  function Toastifier(message) {
    Toastify({
    text: message,
    duration: 4000,
    destination: "./missingList/missings.html",
    newWindow: false,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #101010, #6D28D9, #001100)",
      color: "white",
    },
    onClick: function(){
    } // Callback after click
    }).showToast();
  }





/*   Toastify({
    text: `${selectedPokemon.name} atrapado!`,
    duration: 4000,
    destination: "./missingList/missings.html",
    newWindow: false,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #101010, #6D28D9, #001100)",
      color: "white",
    },
    onClick: function(){
    } // Callback after click
  }).showToast(); */