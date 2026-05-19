import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { GetPokemon } from './services/PokeApi';
import { PokemonCard } from './components/PokeComponent';
import PokemonDetail from './components/PokeDetalle';
import type { Pokemon } from './interface/Pokemon';

export default function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    GetPokemon().then(setPokemons);
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <main className="grid lg:grid-cols-4 gap-4 p-2 max-w-4xl mx-auto">
          {pokemons.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
          ))}
        </main>
      } />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
    </Routes>
  );
}