import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { UserService } from '../../service/userservice/user.service'
import { HttpService } from '../../service/httpservice/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        ReactiveFormsModule, HttpClientTestingModule, OverlayModule, FormsModule, MatCheckboxModule, BrowserAnimationsModule
      ],
      providers: [
        UserService, HttpService, MatSnackBar
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.registerForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.registerForm.controls['firstName'].setValue('Aniket');
    component.registerForm.controls['lastName'].setValue('gujar');
    component.registerForm.controls['email'].setValue('aniketgujar123gmail.com');
    component.registerForm.controls['password'].setValue('Aniket@123');
    component.registerForm.controls['confirmPassword'].setValue('Aniket123');
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.registerForm.controls['firstName'].setValue('Aniket');
    component.registerForm.controls['lastName'].setValue('Gujar');
    component.registerForm.controls['email'].setValue('aniketgujar123@gmail.com');
    component.registerForm.controls['password'].setValue('Aniket@123');
    component.registerForm.controls['confirmPassword'].setValue('Aniket@123');
    expect(component.registerForm.valid).toBeTruthy();
  });
});
