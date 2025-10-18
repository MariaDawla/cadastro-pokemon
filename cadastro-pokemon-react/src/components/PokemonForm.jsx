import "./PokemonForm.css";

import { useState } from "react";

function PokemonForm({ onAddPokemon }) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poder, setPoder] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !tipo || !descricao || !poder) {
      setErro("🚨 Preencha todos os campos!");
      return;
    }

    const novoPokemon = { nome, tipo, descricao, poder };
    onAddPokemon(novoPokemon);

    setMensagem("🙌 Pokémon cadastrado!");
    setErro("");
    setNome("");
    setTipo("");
    setDescricao("");
    setPoder("");

    setTimeout(() => setMensagem(""), 2000);
  };

  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Pokémon"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecione o tipo</option>
        <option value="🔥 Fogo">🔥 Fogo</option>
        <option value="💧 Agua">💧 Agua</option>
        <option value="🌱 Grama">🌱 Grama</option>
        <option value="⚡ Eletrico">⚡ Eletrico</option>
        <option value="🧠 Psiquico">🧠 Psiquico</option>
        <option value="🪨 Pedra">🪨 Pedra</option>
      </select>

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <input
        type="number"
        placeholder="Poder (0 a 100)"
        value={poder}
        onChange={(e) => setPoder(e.target.value)}
        min="0"
        max="100"
      />

      <button type="submit">Cadastrar</button>

      {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
      {erro && <p className="mensagem-erro">{erro}</p>}
    </form>
  );
}

export default PokemonForm;
