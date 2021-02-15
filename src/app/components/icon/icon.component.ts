import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,private router: Router) { }

  ngOnInit(): void {
  }

  openSnackBar=(message,action)=>{
    this.snackBar.open(message, action, {
      duration: 3000
    })
    // this.router.navigate(['dashboard/notes']);
    // console.log("----------------")
  }
}
