import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/service/userservice/user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfilepicComponent } from './profilepic.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
describe('ProfilepicComponent', () => {
  let component: ProfilepicComponent;
  let fixture: ComponentFixture<ProfilepicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilepicComponent],
      imports: [HttpClientTestingModule],
      providers: [UserService, DashboardComponent, MatDialogModule, MatDialogRef]
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
