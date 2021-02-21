import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilepicComponent } from '../profilepic/profilepic.component'
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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.router.navigate(['/dashboard/notes'])
  }

  openDialog() {
    this.openProfileDialog();
  }

  refresh = () => {
    window.location.reload();
  }

  openProfileDialog(): void {
    this.dialog.open(ProfilepicComponent, {
      height: '700px',
      width:'1200px'
    });
  }

}

