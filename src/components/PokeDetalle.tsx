import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Pokemon } from "../interface/Pokemon";

interface Props {
    botonComparar: boolean;
    pokemonRecibido?: Pokemon | null;
}
export default function PokemonDetail({ botonComparar, pokemonRecibido }: Props) {

    const {id} = useParams();

    const [pokemonLocal, setPokemonLocal] = useState<Pokemon | null>(null);

    const navigate = useNavigate();

    const pokemon = pokemonRecibido || pokemonLocal;

    useEffect(() => {
        if (!pokemonRecibido && id) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => res.json())
                .then(data => setPokemonLocal(data))
                .catch(err => console.error("Error obteniendo los detalles del Pokemon:", err));
        }
    }, [id, pokemonRecibido]);

    if(!pokemon){
        return <p className="flex justify-center items-center">Cargando detalles del Pokemon</p>;
    }

    return (

        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md max-w-md mx-auto mt-5 mb-5">
            <span className="text-gray-400 font-mono text-xl">{"#" + pokemon.id}</span>
            <h1 className="text-3xl font-bold capitalize mt-2">{pokemon.name}</h1>

            <img 
                src={pokemon.sprites.other["official-artwork"].front_default} 
                className="w-48 h-48 mt-4"
            />


            <div className="mt-6 w-full">

                <h3 className="font-semibold pb-2 mt-4">Tipos:</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {pokemon.types.map(t => (
                        <span key={t.slot} className={`text-black text-md ${t.type.name} `}>
                            {t.type.name}
                        </span>
                    ))}
                </div>
                <h3 className="font-semibold pb-2 mt-4">Peso:</h3>
                <p className="text-md ">{pokemon.weight / 10} kg</p>
                <h3 className="font-semibold  pb-2 mt-4">Altura:</h3>
                <p className="text-md">{pokemon.height / 10} m</p>
                <h3 className="font-semibold pb-2 mt-4">Habilidades:</h3>
                <ul className="mt-2 text-md ">
                    {pokemon.abilities.map(a => (
                        <li key={a.slot} className="flex justify-between">
                            <span className="capitalize">{a.ability.name}</span>
                            {a.is_hidden && <span className="text-md">(Oculta)</span>}
                        </li>
                    ))}
                </ul>

                 <h3 className="font-semibold  pb-2 mt-3">Estadisticas Base:</h3>
                <ul className="mt-2 text-md ">
                    {pokemon.stats.map(s => (
                        <li key={s.stat.name} className="flex justify-between">
                            <span className="capitalize">{s.stat.name}:</span>
                            <span >{s.base_stat}</span>
                            
                        </li>
                    ))}
                </ul>
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-150"
                    onClick={() => navigate ('/')}
            >
                Volver
            </button>
            {botonComparar && (
                <button className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-150"
                        onClick={() => {
                            navigate(`/comparar/${id}`);
                        }}
            >
                Comparar Pokemon
            </button>
            )}
        </div>
    );
}