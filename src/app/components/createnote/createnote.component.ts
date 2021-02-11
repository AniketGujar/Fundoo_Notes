import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  openSnackBar=(message,action)=>{
    this.snackBar.open(message, action, {
      duration: 3000,
    })
  }

}
