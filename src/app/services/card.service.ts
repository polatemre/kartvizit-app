import { Card } from './../models/card';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards!: Card[];
  filteredCards!: Card[];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) {}

  getCards() {
    return this.http
      .get<Card[]>(this.apiUrl + 'cards')
      .subscribe((res: Card[]) => {
        this.cards = res;
        this.filteredCards = res;
      });
  }

  addCard(card: Card) {
    return this.http.post(this.apiUrl + 'cards', card);
  }

  updateCard(card: Card, cardId: number) {
    return this.http.put(this.apiUrl + 'cards/' + cardId, card);
  }

  deleteCard(cardId: number) {
    return this.http.delete(this.apiUrl + 'cards/' + cardId);
  }
}
