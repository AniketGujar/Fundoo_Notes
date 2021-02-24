import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  constructor() { }

  imageUrl;
  userName;
  userEmail;
  value = '';
  
  ngOnInit(): void {
    this.profile();
  }

  profile=()=>{
    let url= localStorage.getItem('image')
    this.imageUrl= 'http://fundoonotes.incubation.bridgelabz.com/'+url;
    this.userName= localStorage.getItem('firstName') + " "+ localStorage.getItem('lastName')
    this.userEmail = localStorage.getItem('email')
  }

  collaborator=()=>{
    // api
  }
}
