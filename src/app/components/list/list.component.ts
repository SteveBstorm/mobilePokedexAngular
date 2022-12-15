import { Pokedex } from './../../models/poke.model';
import { PokedexService } from './../../services/pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokedex! : Pokedex
  selectedPokemon! : string
  constructor(
    private service : PokedexService
  ) { }

  ngOnInit(): void {
    this.loadData("https://pokeapi.co/api/v2/pokemon")
  }

  loadData(url : string) {
    this.service.getPokemonList(url).subscribe({
      next : (data : Pokedex) => this.pokedex = data
    })
  }

  select(url : string) {
    this.selectedPokemon = url
  }

  next() {
    this.loadData(this.pokedex.next ?? "")
  }

  previous() {
    this.loadData(this.pokedex.previous ?? "")
  }

}
