/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoutePathService } from './RoutePath.service';

describe('Service: RoutePath', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutePathService]
    });
  });

  it('should ...', inject([RoutePathService], (service: RoutePathService) => {
    expect(service).toBeTruthy();
  }));
});
