import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IconComponent } from './icon.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '../../service/httpservice/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconComponent],
      imports: [
        OverlayModule, RouterTestingModule, HttpClientTestingModule, MatDialogModule,MatMenuModule
      ],
      providers: [
        MatSnackBar, HttpService, MatDialog
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
