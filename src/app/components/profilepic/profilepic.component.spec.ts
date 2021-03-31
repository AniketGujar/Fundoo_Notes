import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/service/userservice/user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfilepicComponent } from './profilepic.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProfilepicComponent', () => {
  let component: ProfilepicComponent;
  let fixture: ComponentFixture<ProfilepicComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilepicComponent],
      imports: [HttpClientTestingModule, BrowserAnimationsModule,MatDialogModule],
      providers: [UserService, DashboardComponent,{
        provide: MatDialogRef,
        useValue: mockDialogRef
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
