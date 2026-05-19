import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import type { Pokemon } from "../interface/Pokemon";
import { useNavigate } from "react-router-dom";

export default function PokemonDetail() {

    const {id} = useParams();

    if (!id) 
    {
        return <p>No se pudo encontra el pokemon.</p>;
    }

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(data => setPokemon(data))
            .catch(err => console.error("Error obteniendo los detalles del Pokemon:", err));
    }, [id]);

    if(!pokemon){
        return <p className="flex justify-center items-center">Cargando detalles del Pokemon...</p>;
    }

    return (
        
        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
            <span className="text-gray-400 font-mono text-xl">{"Id: " + id}</span>
            <h1 className="text-3xl font-bold capitalize mt-2">{pokemon.name}</h1>
            
            <img 
                src={pokemon.sprites.other["official-artwork"].front_default} 
                className="w-48 h-48 mt-4"
            />

            <div className="mt-6 w-full">

                <h3 className="font-semibold border-b pb-2 mt-4">Tipos:</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {pokemon.types.map(t => (
                        <span key={t.slot} className={`text-black text-sm ${t.type.name} `}>
                            {t.type.name}
                        </span>
                    ))}
                </div>
                <h3 className="font-semibold border-b pb-2 mt-4">Peso:</h3>
                <p className="text-lg font-bold">{pokemon.weight / 10} kg</p>
                <h3 className="font-semibold border-b pb-2 mt-4">Altura:</h3>
                <p className="text-lg font-bold">{pokemon.height / 10} m</p>
                <h3 className="font-semibold border-b pb-2 mt-4">Habilidades:</h3>
                <ul className="mt-2 text-sm text-gray-600">
                    {pokemon.abilities.map(a => (
                        <li key={a.slot} className="flex justify-between">
                            <span className="capitalize">{a.ability.name}</span>
                            {a.is_hidden && <span className="text-xs text-gray-500">(Oculta)</span>}
                        </li>
                    ))}
                </ul>

                 <h3 className="font-semibold border-b pb-2">Estadisticas Base:</h3>
                <ul className="mt-2 text-sm text-gray-600">
                    {pokemon.stats.map(s => (
                        <li key={s.stat.name} className="flex justify-between">
                            <span className="capitalize">{s.stat.name}:</span>
                            <span className="font-bold">{s.base_stat}</span>
                            
                        </li>
                    ))}
                </ul>
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-150"
                    onClick={() => navigate ('/')}
            >
                Volver
            </button>
        </div>
    );
}