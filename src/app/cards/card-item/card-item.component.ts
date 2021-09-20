import { CardModalComponent } from './../card-modal/card-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Card } from './../../models/card';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() card!: Card;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openUpdateCardModal(){
    this.dialog.open(CardModalComponent, {
      width:'400px',
      data: this.card
    })
  }

}
