import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line:max-line-length
import { PhotoUploaderContentDialogComponent } from 'src/app/modules/photo-confirmation-panels/components/photo-uploader-content-dialog/photo-uploader-content-dialog.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() editSectionUser = new EventEmitter<void>();
  @Output() dashbordSection = new EventEmitter<void>();

  constructor(private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  emitMenu() {
    this.toggleSidenav.emit();
  }

  logout() {
    this.authService.logout();
  }

  emitEditUserProfileAsCurrentSection() {
    this.editSectionUser.emit();
  }

  emitDashboardAsCurrentSection() {
    this.dashbordSection.emit();
  }

  openPhotoUploaderContentDialog() {
    const dialogRef = this.dialog.open(PhotoUploaderContentDialogComponent, {
      width: '700px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }


}
