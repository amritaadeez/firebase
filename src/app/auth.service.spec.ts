import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { AuthenticationService } from './auth.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
=======
import { AuthenticationService } from './auth.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
>>>>>>> merge
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
