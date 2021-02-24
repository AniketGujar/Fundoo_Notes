import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DisplaynotesComponent } from './displaynotes.component';
import { UpdateComponent } from '../update/update.component';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatDialogModule} from '@angular/material/dialog';

describe('DisplaynotesComponent', () => {
  let component: DisplaynotesComponent;
  let fixture: ComponentFixture<DisplaynotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplaynotesComponent],
      providers: [MatDialog, UpdateComponent],
      imports: [OverlayModule,MatDialogModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
