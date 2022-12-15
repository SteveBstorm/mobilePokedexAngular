import { Pokemon } from './../../models/poke.model';
import { PokedexService } from './../../services/pokedex.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() set url(incommingUrl : string) {
    this.service.getPokemon(incommingUrl).subscribe({
      next : (monPokemon : Pokemon) => this.pokemon = monPokemon
    })
  }

  pokemon! : Pokemon

  constructor(
    private service : PokedexService
  ) { }

  ngOnInit(): void {
  }

}
