import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { ProfilepicComponent } from '../profilepic/profilepic.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mobileQuery: MediaQueryList;
  note;
  fName = localStorage.getItem('firstName');
  lName = localStorage.getItem('lastName');
  email = localStorage.getItem('email');
  imageUrl;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.profilePic();
  }

  openDialog() {
    this.openProfileDialog();
  }

  refresh = () => {
    window.location.reload();
  }

  openProfileDialog(): void {
    let dialogRef = this.dialog.open(ProfilepicComponent, {
      height: '700px',
      width: '1200px'
    });
  }

  profilePic = () => {
    let url = localStorage.getItem('image')
    this.imageUrl = 'http://fundoonotes.incubation.bridgelabz.com/' + url;
  }
}

