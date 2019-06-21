import { Injectable } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotoFileItemService {

  constructor() { }

  // tslint:disable-next-line:max-line-length
  checkIfAddingPhotoIsNotCurrentlyExistingInPhotoUploaderQueue(fileItems: FileItem[], photoUploaderModel: PhotoUploaderModel, lastCurrentPhoto: FileItem) {
    const foundFiles = fileItems.filter(x => x.file.name === lastCurrentPhoto.file.name && x.file.size === lastCurrentPhoto.file.size);
    const isTheSameFilesWasUploaded = foundFiles.length >= 2;

    return isTheSameFilesWasUploaded;
  }

  getLastCurrentPhoto(fileItems: FileItem[], photoUploaderModel: PhotoUploaderModel): FileItem {
    return fileItems.find(x => x.index === photoUploaderModel.index);
  }

  isTheLastAddedFiles(fileItems: FileItem[], photoUploaderModel: PhotoUploaderModel) {
    return fileItems.length === photoUploaderModel.index;
  }

  prepareIndexForPhotoUploader(uploader: FileUploader) {
    const fileItems = uploader.queue;
    let index = 1;
    fileItems.forEach(fileItem => {
      fileItem.index = index;
      index++;
    });
  }

  GetPhotoUploaderModel(fileItem: FileItem, photoUploaderModels: PhotoUploaderModel[]) {
    const photoUploaderModelToReturn = photoUploaderModels.find(x => x.index === fileItem.index);
    return photoUploaderModelToReturn;
  }

}
