import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(newItem: any, key: string) {
    localStorage.setItem(key, JSON.stringify(newItem));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
