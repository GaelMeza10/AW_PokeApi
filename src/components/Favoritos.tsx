import { useEffect, useState } from "react";
import { GetPokemon } from "../services/PokeApi";
import { PokemonCard } from "./PokeCard";
import type { Pokemon } from "../interface/Pokemon";
import { getFavoritos } from "../storage/Favoritos";
//agregar un mensaje de carga mientras se obtienen los favoritos

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState<Pokemon[]>([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const favoritosIds = getFavoritos();

        GetPokemon().then((data) => {
            const pokemonesFavoritos = data.filter((p) => favoritosIds.includes(p.id));
            setFavoritos(pokemonesFavoritos);
            setCargando(false);
        });
    }, []);
    if (cargando) {
        return <p className="text-center mt-10 font-medium">Cargando favoritos...</p>;
    }
    return (

        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Pokemones Favoritos</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {favoritos.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}