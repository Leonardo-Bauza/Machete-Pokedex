const pokemonList = [
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Ivysaur' },
  { id: 3, name: 'Venusaur' },
  { id: 4, name: 'Charmander' },
  { id: 5, name: 'Charmeleon' },
  { id: 6, name: 'Charizard' },
  { id: 7, name: 'Squirtle' },
  { id: 8, name: 'Wartortle' },
  { id: 9, name: 'Blastoise' },
  { id: 10, name: 'Caterpie' },
  { id: 11, name: 'Metapod' },
  { id: 12, name: 'Butterfree' },
  { id: 13, name: 'Weedle' },
  { id: 14, name: 'Kakuna' },
  { id: 15, name: 'Beedrill' },
  { id: 16, name: 'Pidgey' },
  { id: 17, name: 'Pidgeotto' },
  { id: 18, name: 'Pidgeot' },
  { id: 19, name: 'Rattata' },
  { id: 20, name: 'Raticate' },
  { id: 21, name: 'Spearow' },
  { id: 22, name: 'Fearow' },
  { id: 23, name: 'Ekans' },
  { id: 24, name: 'Arbok' },
  { id: 25, name: 'Pikachu' }
];

const login = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
      localStorage.setItem('username', username);
      document.getElementById('login').style.display = 'none';
      document.getElementById('pokedex').style.display = 'block';
      createPokedex();
  }
};

const createPokedex = () => {
  const pokemonListDiv = document.getElementById('pokemon-list');
  pokemonListDiv.innerHTML = '';
  const username = localStorage.getItem('username');
  const userData = JSON.parse(localStorage.getItem(username)) || {};

  pokemonList.forEach(pokemon => {
      const pokemonCard = document.createElement('div');
      pokemonCard.className = 'pokemon-card';
      pokemonCard.innerHTML = `
          <h3>${pokemon.name}</h3>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
          <label>
              <input type="checkbox" id="${pokemon.id}-male" ${userData[`${pokemon.id}-male`] ? 'checked' : ''}>
              Macho
          </label>
          <label>
              <input type="checkbox" id="${pokemon.id}-female" ${userData[`${pokemon.id}-female`] ? 'checked' : ''}>
              Hembra
          </label>
      `;
      pokemonListDiv.appendChild(pokemonCard);
  });
};

const saveUserData = () => {
  const username = localStorage.getItem('username');
  const userData = {};

  pokemonList.forEach(pokemon => {
      userData[`${pokemon.id}-male`] = document.getElementById(`${pokemon.id}-male`).checked;
      userData[`${pokemon.id}-female`] = document.getElementById(`${pokemon.id}-female`).checked;
  });

  localStorage.setItem(username, JSON.stringify(userData));
};

const showMissing = () => {
  saveUserData();
  const missingPokemon = [];
  const missingMale = [];
  const missingFemale = [];

  pokemonList.forEach(pokemon => {
      const maleChecked = document.getElementById(`${pokemon.id}-male`).checked;
      const femaleChecked = document.getElementById(`${pokemon.id}-female`).checked;

      if (!maleChecked && !femaleChecked) {
          missingPokemon.push(pokemon.name);
      } else if (!maleChecked) {
          missingMale.push(`${pokemon.name} (macho)`);
      } else if (!femaleChecked) {
          missingFemale.push(`${pokemon.name} (hembra)`);
      }
  });

  const missingMessageParts = [];

  if (missingPokemon.length > 0) {
      missingMessageParts.push(`Faltan capturar: ${missingPokemon.join(', ')}`);
  }
  if (missingMale.length > 0) {
      missingMessageParts.push(`Faltan capturar macho: ${missingMale.join(', ')}`);
  }
  if (missingFemale.length > 0) {
      missingMessageParts.push(`Faltan capturar hembra: ${missingFemale.join(', ')}`);
  }
  window.scrollTo(0,0);
  document.getElementById('missing-pokemon').innerText = `Entrenador, ${missingMessageParts.join(' ')}`;
};

document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  if (username) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('pokedex').style.display = 'block';
      createPokedex();
  }
});