import { TestBed } from '@angular/core/testing';

import { NotaFiscalService } from './nota-fiscal.service';

describe('NotaFiscalService', () => {
  let service: NotaFiscalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotaFiscalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
