import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesServiceService } from '../../service/notesService/notes-service.service'
import { NotesComponent } from '../notes/notes.component'
import { CreatenoteComponent } from './createnote.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpService } from '../../service/httpservice/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreatenoteComponent', () => {
  let component: CreatenoteComponent;
  let fixture: ComponentFixture<CreatenoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenoteComponent ],
      imports:[MatSnackBarModule,HttpClientTestingModule],
      providers:[
        NotesComponent,NotesServiceService,HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
