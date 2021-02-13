import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreatenoteComponent } from '../createnote/createnote.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("Notes Array ",this.notesArray)
  }

  @Input()notesArray;

  openDialog=(data)=>{
    console.log(data);
    this.dialog.open(CreatenoteComponent,{
      width: '900px',})
  }
}
