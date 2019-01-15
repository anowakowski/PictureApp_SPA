import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

describe('Service: User', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
            UserService,
            AuthService
        ],
        imports: [
            HttpClientModule
        ]
      });
    });

    it('should ...', inject([UserService], (service: UserService) => {
      expect(service).toBeTruthy();
    }));
  });

