import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/userservice/user.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClickSubmit = (data) => {
    let loginData = {
      "email": data.email,
      "password": data.password,
      "service": "advance"
    }
    this.userService.login(loginData).subscribe((res) => {
      console.log("Login Sucessful ", res)
      this.openSnackBar("Login Sucess..!!", "Done")
    },
      (error) => {
        console.log('error caught in component', error)
        console.log('Status', error.status);
        if (error.status == 401) {
          this.openSnackBar("Access Denied..!!", "Failed")
        }
        if (error.status == 400) {
          this.openSnackBar("Enter Email & Password..!!", "Provide Input")
        }
      }
    )
  }

  openSnackBar = (message: string, action: string) => {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
