import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay/index';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog<T>(dialogComponentToOpen: ComponentType<T>, width?: string, height?: string, position?: any, panelClass?: string) {
    const dialogRef = this.dialog.open(dialogComponentToOpen, {
      width: (width === null || width === undefined) ? '450px' : width,
      height: (height === null || height === undefined) ? '400px' : height,
      position: (position === null || position === undefined) ? null : position,
      panelClass: (panelClass === null || panelClass === undefined) ? null : panelClass
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
