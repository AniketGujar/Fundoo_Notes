import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesServiceService } from 'src/app/service/notesService/notes-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateComponent } from './update.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TextFieldModule} from '@angular/cdk/text-field';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponent ],
      providers:[
        NotesServiceService,    { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      imports:[
        RouterModule, RouterTestingModule,HttpClientModule,MatDialogModule,TextFieldModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
