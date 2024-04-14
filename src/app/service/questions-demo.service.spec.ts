import { TestBed } from '@angular/core/testing';

import { QuestionsDemoService } from './questions-demo.service';

describe('QuestionsDemoService', () => {
  let service: QuestionsDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
