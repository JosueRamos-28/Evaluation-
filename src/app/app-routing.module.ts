import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta para Home
  { path: 'pokemon', component: PokemonListComponent }, // Ruta para la lista de Pokémon
  { path: 'pokemon/:id', component: PokemonDetailComponent }, // Ruta para detalles por ID
  { path: 'pokemon/:name', component: PokemonDetailComponent }, // Ruta para detalles por nombre
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Redirige a 'home' si la ruta es vacía
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
