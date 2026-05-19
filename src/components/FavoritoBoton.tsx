
import { useState, useEffect } from 'react';

import { getFavoritos, agregarFavorito, eliminarFavorito } from '../storage/Favoritos';

interface FavoritoBotonProps {
    pokemonId: number;
}

export function FavoritoBoton({ pokemonId }: FavoritoBotonProps) {

    const [esFavorito, setEsFavorito] = useState(false);

    useEffect(() => {
        const favoritos = getFavoritos();
        setEsFavorito(favoritos.includes(pokemonId));
    }  , [pokemonId]);

    const manejarClick = () => {
        if(esFavorito) {
            eliminarFavorito(pokemonId);
            setEsFavorito(false);
        } else {
            agregarFavorito(pokemonId);
            setEsFavorito(true);
        }
    }       

    return (
        <button className="text-[9px] bg-red-400 text-white py-0.5 px-2 rounded-md hover:bg-red-600 transition-colors duration-150"
            onClick={manejarClick}>
            {esFavorito ? "Eliminar Favorito" : "Agregar a Favoritos"}
        </button>
    );
}