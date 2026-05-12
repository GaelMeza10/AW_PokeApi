export interface Pokemon{
    id: number, 
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: PokemonAbility[],
    forms: PokemonForm[],
    game_indices: PokemonGameIndex[],
    held_items: PokemonHeldItem[],
    location_area_encounters: string,
    moves: PokemonMove[],
    sprites: PokemonSprites,
    species: PokemonSpecies,
    stats: PokemonStat[],
    types: PokemonType[]

}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  back_default: string;
  other: {
    "official-artwork": {
      front_default: string;
    };
    showdown?: {
      front_default: string;
    };
  };
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
}

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}



export interface PokemonGameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface PokemonHeldItem {
  item: {
    name: string;
    url: string;
  };
    version_details: {
    rarity: number;
    version: {
      name: string;
        url: string;
    };
    }[];
}