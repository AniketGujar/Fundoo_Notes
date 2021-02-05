import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { UserService } from '../../service/userservice/user.service'
// import { MustMatch } from './_helpers/must-match.validator'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder ,private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12),Validators.pattern('^[A-Z]+[a-zA-Z]{2,}$')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12),Validators.pattern('^[A-Z]+[a-zA-Z]{2,}$')]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^([a-z]+[0-9a-z-!$%+&_.]*){3,15}@[a-z0-9]{1,8}[.]*([a-z]{2,4})*.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }
  // , {
  //     validator: this.MustMatch('password', 'confirmPassword')
  // }
  );
}

get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
      return;
  }

  console.log(this.registerForm.value)
  this.register(this.registerForm.value)
}


register=(formValues)=>{
  let data={
    firstName : formValues.firstName,
    lastName : formValues.lastName,
    email : formValues.email,
    password : formValues.password,
    "service" : "advance"
  }
  console.log("data in register ",data)
  this.userService.registaration(data).subscribe((res)=>{
    
    console.log("Sucess ",res)
  })
}
}