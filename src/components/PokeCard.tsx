import type { Pokemon } from "../interface/Pokemon";
import { useNavigate } from "react-router-dom";
import { FavoritoBoton } from "./FavoritoBoton";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

  const navigate = useNavigate();
  
  
  return (  
    
    <div className="card rounded-lg  shadow-lg p-1.5 bg-gray-150 hover:shadow-lg transition-all duration-300  mx-auto">
      <img 
        className="w-20 h-20 mx-auto object-contain"
        src={pokemon.sprites.other["official-artwork"].front_default} 
        alt={pokemon.name} 
      />
      <div className="card-info mt-0.5 text-center">
        <span className="text-[10px] font-bold text-gray-400">
          #{pokemon.id}
        </span>
        <h2 className="font-bold">{pokemon.name}</h2>
        
        <div className="flex flex-wrap justify-center gap-5">
          <FavoritoBoton pokemonId={pokemon.id} />
        </div>
        <button className="text-[9px] bg-blue-400 text-white py-0.5 px-2 rounded-md hover:bg-blue-600 transition-colors duration-150"
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                > Detalles
        </button>
      </div>
    </div>
  );
};