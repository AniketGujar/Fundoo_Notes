import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NotesServiceService } from './notes-service.service';

describe('NotesServiceService', () => {
  let service: NotesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(NotesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
