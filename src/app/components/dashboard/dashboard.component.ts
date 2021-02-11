import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { UserService } from '../../service/userservice/user.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mobileQuery: MediaQueryList;
  note;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private userService: UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.userService.getAllNotes().subscribe((res)=>{
      console.log("Get Notes ", res['data'].data);
      this.note =res['data'].data;
      console.log("NOTE ",this.note)

    },(error)=>{
      console.log("Get Notes ", error);
    })
  }

}

