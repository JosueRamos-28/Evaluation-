import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokemonApiResponse } from '../models/pokemon.model';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  placeholderImageUrl = 'ruta/a/tu/imagen/de/marcador.png';

  constructor(
    private pokemonService: PokemonService,
    private router: Router // Asegúrate de inyectar Router aquí
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe({
      next: (data: PokemonApiResponse) => {
        const requests = data.results.map(pokemon => {
          const id = pokemon.url?.split('/').filter(Boolean).pop();
          const pokemonId = id ? Number(id) : 0;

          return this.pokemonService.getPokemonDetail(pokemonId.toString()).pipe(
            map(pokemonDetail => ({
              id: pokemonId,
              name: pokemonDetail.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`, // Añadir 'image'
              sprites: pokemonDetail.sprites,
              types: pokemonDetail.types,
              height: pokemonDetail.height,
              weight: pokemonDetail.weight
            }))
          );
        });

        forkJoin(requests).subscribe({
          next: (pokemons: Pokemon[]) => {
            this.pokemons = pokemons;
          },
          error: (err) => {
            console.error('Error al obtener los detalles de los Pokémon:', err);
          }
        });
      },
      error: (err) => {
        console.error('Error al obtener la lista de Pokémon:', err);
      }
    });
  }

  viewPokemonDetail(pokemon: Pokemon): void {
    this.router.navigate(['/pokemon', pokemon.id]); // Redirige a la página de detalles
  }
}



