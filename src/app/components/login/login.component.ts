import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/userservice/user.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = false;

  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit = (data) => {
    let loginData = {
      "email": data.email,
      "password": data.password,
      "service": "advance"
    }
    this.userService.login(loginData).subscribe((res) => {
      console.log("Login Sucessfull ", res)

      localStorage.setItem('token', res['id'])
      localStorage.setItem('id', res['userId'])
      localStorage.setItem('firstName', res['firstName'])
      localStorage.setItem('lastName', res['lastName'])
      localStorage.setItem('email', res['email'])
      localStorage.setItem('image',res['imageUrl'])

      this.openSnackBar("Login Sucessfull..!!", "Close")
      this.router.navigate(['dashboard/notes']);
    },
      (error) => {
        console.log('Status', error);
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
