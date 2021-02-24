import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserService } from 'src/app/service/userservice/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.component.html',
  styleUrls: ['./profilepic.component.scss']
})
export class ProfilepicComponent implements OnInit {

  constructor(private userService: UserService, public dialogRef: MatDialogRef<DashboardComponent>) { }
  imageChangedEvent: any = '';
  croppedImage: any = '';

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;

  }
  imageLoaded() {
    // da
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  setprofile = () => {
    console.log("Image Value ", this.croppedImage);

    const formData = new FormData();
    formData.set('file', this.croppedImage);

    this.userService.image(formData).subscribe((res) => {
      console.log("Image ", res)
    }, (error) => {
      console.log("Image err ", error)
    })

    // this.getLocalStorage.getItem('image');
    // call bashboard
    // this.dialogRef.close();
  }

  close = () => {
    this.dialogRef.close();
  }
}
