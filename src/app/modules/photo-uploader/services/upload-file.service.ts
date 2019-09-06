import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  baseUrl = environment.apiUrl + 'Streaming/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  public uploadFile(model: any) {
    return this.http.post(this.baseUrl + 'upload/', model);
  }

  public removePhotos(ids: any) {
    return this.http.post(this.baseUrl + 'removePendingUploads/', ids);
  }
}
