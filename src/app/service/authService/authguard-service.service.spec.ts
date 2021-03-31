import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthguardServiceService } from './authguard-service.service';

describe('AuthguardServiceService', () => {
  let service: AuthguardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[],
      imports:[RouterTestingModule]
    });
    service = TestBed.inject(AuthguardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
