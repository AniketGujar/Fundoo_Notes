import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  title: String;
  description: String;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @Input() notesArray;

  openDialog = (data) => {
    console.log("Data in display ",data);
    this.dialog.open(UpdateComponent, {
      width: '500px',
      height: 'auto', 
      data: data
    })
  }

  cardData=(card)=>{
    localStorage.setItem('card',card.id);
    console.log("Card ID ", card.id);
  }
}
