// src/app/models/pokemon.model.ts
export interface Pokemon {
  id: number;
  name: string;
  image: string; // Asegúrate de incluir esta propiedad
  sprites: { front_default: string };
  types: Array<{ type: { name: string } }>;
  height: number;
  weight: number;
}


export interface PokemonApiResponse {
  results: {
    name: string;
    url: string;
  }[];
}





