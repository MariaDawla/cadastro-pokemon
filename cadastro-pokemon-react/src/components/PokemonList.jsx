import "./PokemonList.css";

function PokemonList({ pokemons }) {
  if (pokemons.length === 0) {
    return <p className="sem-pokemons">Nenhum Pokémon cadastrado ainda 😅</p>;
  }

  return (
    <div className="pokemon-list">
      {pokemons.map((p, index) => (
        <div key={index} className={`pokemon-card ${p.tipo.split(" ")[1].toLowerCase()}`}>
          <h3>{p.nome}</h3>
          <p><strong>Tipo:</strong> {p.tipo}</p>
          <p><strong>Poder:</strong> {p.poder}</p>
          <p><strong>Descricao:</strong> {p.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
