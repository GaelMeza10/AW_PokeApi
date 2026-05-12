import type { Pokemon } from '../interface/Pokemon';

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

export const GetPokemon = async (): Promise<Pokemon[]> => {
    const respuesta_api = await fetch(`${POKE_API_URL}?limit=20`);
    const data = await respuesta_api.json();
    // Obtener los detalles de cada Pokemon
    const detalles_pokemon = data.results.map(async (poke:{url:string}) => {
        const res = await fetch(poke.url);
        return await res.json();
    });
    return Promise.all(detalles_pokemon);
}