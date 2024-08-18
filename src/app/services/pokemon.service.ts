import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?limit=100`);
  }

  getPokemonDetail(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${name}`);
  }
}




