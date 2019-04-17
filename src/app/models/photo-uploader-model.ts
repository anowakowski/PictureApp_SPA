import { FileUploader } from 'ng2-file-upload';
import { SafeUrl } from '@angular/platform-browser';

export class PhotoUploaderModel {
    isEditMode: boolean;
    index: number;
    photoTitle: string;
    photoDescription: string;
}
