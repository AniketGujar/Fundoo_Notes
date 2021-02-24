import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesServiceService } from 'src/app/service/notesService/notes-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateComponent } from './update.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponent ],
      providers:[
        NotesServiceService
      ],
      imports:[
        RouterModule, RouterTestingModule,HttpClientModule
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
