import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  pokemons = ['Bulbasaur', 'Ivysaur', 'Venosaur', 'Charmander'];
}
