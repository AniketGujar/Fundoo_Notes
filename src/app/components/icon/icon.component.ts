import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar=(message,action)=>{
    this.snackBar.open(message, action, {
      duration: 3000,
    })
  }
}
