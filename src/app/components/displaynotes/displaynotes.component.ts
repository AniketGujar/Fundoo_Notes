import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  title:String;
  description:String;
  
  ngOnInit(): void {
    console.log("Notes Array ",this.notesArray)
  }

  @Input()notesArray;

  openDialog=(data)=>{
    console.log(data);
    const dialogRef = this.dialog.open(UpdateComponent,{
      width: '600px',
      data: { title: "ANdasdas", description:"Gadsdas"}
    })
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.notesArray.title = result;
    // });
  }
}
