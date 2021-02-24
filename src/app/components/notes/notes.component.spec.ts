import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from '../../service/notesService/notes-service.service'
import { NotesComponent } from './notes.component';
import { HttpService } from '../../service/httpservice/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OverlayModule } from '@angular/cdk/overlay';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesComponent ],
      imports:[
        HttpClientTestingModule,OverlayModule
      ],
      providers:[
        MatSnackBar,NotesServiceService,HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
