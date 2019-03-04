import { PhotoComment } from './photoComment';

export class Photo {
    id: number;
    url: string;
    description: string;
    dateAdded: Date;
    isMain: boolean;
    title: string;
    subtitle: string;
    photoComments: PhotoComment[];
}
