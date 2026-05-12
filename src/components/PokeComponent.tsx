import type { Pokemon } from "../interface/Pokemon";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className="card rounded-lg border shadow-sm p-1.5 bg-white hover:shadow-md transition-all duration-300  mx-auto">
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
      </div>
    </div>
  );
};