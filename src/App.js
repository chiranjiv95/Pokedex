import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import Card from './components/card/card.component';

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
  });

  //method to search pokemon
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: response.data.name,
          species: response.data.species.name,
          img: response.data.sprites.other.dream_world.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
        })

        setPokemonChosen(true)
      }).catch(() => {
        alert("Pokemon not found! Try with a valid name.");
      })
  };

  return (
    <div className="App" >

      <div className='titleSection'>
        <h1>Pokédex</h1>
        <input type="text" onChange={(event) => {
          setPokemonName(event.target.value.toLowerCase());
        }} />
        <button onClick={searchPokemon}>Search</button>
      </div>

      <div className='displaySection'>
        {
          !pokemonChosen ? (<h2>Choose a Pokemon!</h2>) : (
            <Card pokemon={pokemon} />
          )
        }
      </div>

    </div>
  );
}



export default App;
