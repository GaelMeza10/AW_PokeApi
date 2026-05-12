import { useEffect, useState } from 'react';

import { GetPokemon } from './services/PokeApi';
import { PokemonCard } from '../src/components/PokeComponent'
import type { Pokemon } from './interface/Pokemon';

export default function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    GetPokemon().then(setPokemons);
  }, []);

  return (
    <main className="grid lg:grid-cols-8 gap-4 p-4">
      {pokemons.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </main>
  );
}