import { TestBed } from '@angular/core/testing';

import { TraerpublicacionesService } from './traerpublicaciones.service';

describe('TraerpublicacionesService', () => {
  let service: TraerpublicacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerpublicacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
