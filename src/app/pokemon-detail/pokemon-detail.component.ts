import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonDetail(id).subscribe(data => {
        this.pokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          sprites: data.sprites,
          types: data.types.map((t: { type: { name: any; }; }) => t.type.name).join(', '),
          height: data.height,
          weight: data.weight
        };
      });
    }
  }
}


