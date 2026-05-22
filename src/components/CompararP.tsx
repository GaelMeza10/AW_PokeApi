import { useParams } from "react-router-dom";
import type { Pokemon } from "../interface/Pokemon";
import { GetPokemon } from "../services/PokeApi";
import { useEffect, useState } from "react";
import PokemonDetail from "./PokeDetalle";

export default  function CompararP() {

    
      const [idSeleccionado, setIdSeleccionado] = useState<number | null>(null);

      const [pokemon_2, setPokemon_2] = useState<Pokemon | null>(null);


    //obtener el pokemon a comparar de la url
    const [pokemones, setPokemones] = useState<Pokemon[]>([]);
    const [pokemon_1, setPokemon_1] = useState<Pokemon | null>(null);
    
    const idUrl = parseInt(useParams().id || "0");

     useEffect(() => {
        GetPokemon().then((data) => {
            setPokemones(data);
            // Aprovechamos el mismo fetch para buscar el pokemon de la URL
            const encontrado = data.find(p => p.id === idUrl);
            if(encontrado) setPokemon_1(encontrado);
        });
    }, [idUrl]);

    if(!pokemon_1){
        return <p className="flex justify-center items-center">Cargando detalles del Pokemon...</p>;
    }
    return (
        <div className="p-4">
            <h1 className="flex justify-center font-bold text-4xl mb-6">Comparando Pokemones</h1>
            
            <div className="flex flex-col items-center gap-4 mb-8">
                <select className="p-2 border rounded-md" 
                    value={idSeleccionado || ""}
                    onChange={(e) => setIdSeleccionado(parseInt(e.target.value))}>
                    <option value="">Selecciona un pokemon para comparar</option>
                    {pokemones.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                </select>
                
                <button 
                    className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-150"
                    onClick={() => {
                        const p2_encontrado = pokemones.find(p => p.id === idSeleccionado);
                        if(p2_encontrado){
                            setPokemon_2(p2_encontrado);
                        }
                    }}
                >
                    Comparar ahora
                </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10">
                    <PokemonDetail botonComparar={false} />
                    {pokemon_2 && <PokemonDetail botonComparar={false} pokemonRecibido={pokemon_2} />}
            </div>

        </div>
    )
}