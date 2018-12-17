import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnacbarAlertService {

constructor(private snackBar: MatSnackBar) { }

  openSnackbar(message: string, duration: number, action?: string, panelClass?: string) {
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: [panelClass]
    });
  }
}
