import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex, Pokemon } from '../models/poke.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    private client : HttpClient
  ) { }

  getPokemonList(url : string) : Observable<Pokedex> {
    return this.client.get<Pokedex>(url)
  }

  getPokemon(url : string) : Observable<Pokemon> {
    return this.client.get<Pokemon>(url)
  }
}
