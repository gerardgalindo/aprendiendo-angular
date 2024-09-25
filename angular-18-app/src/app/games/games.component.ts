import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `	
    <h3>Los juegos favoritos de {{username}}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavouriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavouriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Uncharted'
    },
    {
      id: 2,
      name: 'The Last of Us'
    },
    {
      id: 3,
      name: 'God of War'
    }
  ]
}
