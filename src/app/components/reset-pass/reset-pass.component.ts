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

  resetForm: FormGroup;
  token: string;
  submitted = false;
  showPassword = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.url[1].path;
    console.log("Token: ", this.token)

    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.resetForm.controls; }

  onClickSubmit = () => {
    this.submitted = true;

    if (this.resetForm.invalid) {
      return;
    }

    console.log(this.resetForm.value)
    this.reset(this.resetForm.value)
  }

  reset = (data) => {
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

  MustMatch = (controlName: string, matchingControlName: string) => {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
