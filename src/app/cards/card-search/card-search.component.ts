import { Card } from './../../models/card';
import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent implements OnInit {
  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  search(searchText: string) {
    searchText = searchText.toLowerCase();
    this.cardService.filteredCards = this.cardService.cards.filter((card) => {
      return (
        card.title.toLowerCase().indexOf(searchText) > -1 ||
        (card.name && card.name.toLowerCase().indexOf(searchText) > -1)
      );
    });
  }
}
