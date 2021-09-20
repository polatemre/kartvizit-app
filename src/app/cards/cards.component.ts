import { Card } from './../models/card';
import { CardService } from './../services/card.service';
import { CardModalComponent } from './card-modal/card-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  constructor(public dialog: MatDialog, public cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getCards();
  }

  openAddCardModal() {
    this.dialog.open(CardModalComponent, {
      width: '400px',
    });
  }

}
