import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ForgotPassComponent } from './forgot-pass.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../service/userservice/user.service'
import { FormsModule } from '@angular/forms';

describe('ForgotPassComponent', () => {
  let component: ForgotPassComponent;
  let fixture: ComponentFixture<ForgotPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ MatSnackBarModule, 
        HttpClientModule,FormsModule
      ],
      declarations: [ ForgotPassComponent ],
      providers: [ MatSnackBar,UserService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
