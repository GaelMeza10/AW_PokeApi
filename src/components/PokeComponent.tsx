import type { Pokemon } from "../interface/Pokemon";
import { useNavigate } from "react-router-dom";
interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const navigate = useNavigate();
    if (!pokemon) return <p className="flex justify-center items-center">Cargando datos del Pokemon...</p>;

  return (  
    <div className="card rounded-lg  shadow-lg p-1.5 bg-gray-150 hover:shadow-lg transition-all duration-300  mx-auto">
      <img 
        className="w-20 h-20 mx-auto object-contain"
        src={pokemon.sprites.other["official-artwork"].front_default} 
        alt={pokemon.name} 
      />
      <div className="card-info mt-0.5 text-center">
        <span className="text-[10px] font-bold text-gray-400">
          #{pokemon.id.toString().padStart(3, '0')}
        </span>
        <h2 className="font-bold">{pokemon.name}</h2>
        
        <div className="flex flex-wrap justify-center gap-5">
          {pokemon.types.map((t) => (
            <span 
              key={t.slot} 
              className={`text-[9px] px-1.5 py-0 rounded-full text-white font-medium ${t.type.name} bg-gray-400`}
            >
              {t.type.name}
            </span>
          ))}
        </div>
        <button className="text-[9px] bg-blue-400 text-white py-0.5 px-2 rounded-md hover:bg-blue-600 transition-colors duration-150"
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                > Detalles
        </button>
      </div>
    </div>
  );
};