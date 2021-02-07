import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../service/userservice/user.service'


@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private userService: UserService) { }

  ngOnInit(): void {
  }

  onClickSubmit = (data) => {
    console.log("Email Id ", data)
    this.userService.forgotPassword(data).subscribe((res) => {
      console.log("Message ", res)
    });
    this.openSnackBar("Check Your Email Id", "Email Sent");
  }

  openSnackBar = (message: string, action: string) => {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
