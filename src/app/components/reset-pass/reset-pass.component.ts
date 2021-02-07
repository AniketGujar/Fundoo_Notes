import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/userservice/user.service'
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
  token: string;

  constructor(private userService: UserService,private formBuilder: FormBuilder, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.url[1].path;
    console.log("Token: ", this.token)
  }

  onClickSubmit = (data) => {
    let resetData = {
      newPassword: data.password
    }
    this.userService.resetPassword(this.token, resetData)
      .subscribe((res) => {
        console.log("Successfull..!! ", res)
        this.openSnackBar("Reset Password Sucessful..!!", "Close")
      }, (err) => {
        this.openSnackBar("Failed to Change the Password..!!", "Close")
        console.log("Error ", err)
      })
  }

  openSnackBar = (message: string, action: string) => {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
