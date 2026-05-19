import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GetPokemon } from './services/PokeApi';
import { PokemonCard } from './components/PokeCard';
import PokemonDetail from './components/PokeDetalle';
import type { Pokemon } from './interface/Pokemon';
import { BarraBusqueda } from './components/BarraBusqueda';
import { TipoFiltro } from './components/TipoFiltro';
import Favoritos from './components/Favoritos';

export default function App() {

  const [busqueda, setBusqueda] = useState("");

  const [tipoSeleccionado, setTipoSeleccionado] = useState("");

  const [pokemones, setPokemones] = useState<Pokemon[]>([]);

  useEffect(() => {
    GetPokemon().then((data) => setPokemones(data));
  }, []);

  const pokemones_filtrados = pokemones.filter(p => p.name.toLowerCase().includes(busqueda.toLowerCase()) && (tipoSeleccionado === "" || p.types.some(t => t.type.name === tipoSeleccionado)));

  return (
    <>
      <nav className='flex justify-center gap-8 p-4 mb-2'>
        <Link to="/"
          className='text-lg font-bold '>
          Inicio</Link>
        <Link to="/favoritos"
          className='text-lg font-bold'>
          Favoritos</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <>        
          <div className="flex flex-col items-center mt-5 mb-5 gap-4">
            <BarraBusqueda value={busqueda} onSearch={setBusqueda} />
            <TipoFiltro value={tipoSeleccionado} OnTypeChange={setTipoSeleccionado} />
          </div>
            <main className="grid lg:grid-cols-4 gap-4 p-2 max-w-4xl mx-auto">
              {pokemones_filtrados.map((p) => (
                <PokemonCard key={p.id} pokemon={p} />
              ))}
            </main>
            {pokemones_filtrados.length === 0 && (
              <p className="text-center mt-10 font-medium">
                No se encontraron pokemones con ese nombre.
              </p>
            )}
          </>

        } />
        <Route path="/favoritos" element={<Favoritos />
        } />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </>

  );
}