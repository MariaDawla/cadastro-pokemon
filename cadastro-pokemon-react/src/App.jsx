import { useState } from "react";
import PokemonForm from "./components/PokemonForm";
import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const handleAddPokemon = (novoPokemon) => {
    setPokemons([...pokemons, novoPokemon]);
  };

  return (
    <div className="container">
      <img className="imagem" src="https://blog.pensanddolls.com.br/wp-content/uploads/2024/10/capturando-pokemons-raros-os-melhores-colecionaveis-do-universo-pokemon.jpeg" alt="imagmePokemon" />
      <div className="app-container">
      <h1>Cadastro de Pokémons</h1>
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <PokemonList pokemons={pokemons} />
    </div>
    </div>
  );
}

export default App;
