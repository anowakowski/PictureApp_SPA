import { FileUploader } from 'ng2-file-upload';
import { SafeUrl } from '@angular/platform-browser';

export class PhotoUploaderModel {
    public fileUploader: FileUploader;
    public filePreviewPaths: SafeUrl[];
}
