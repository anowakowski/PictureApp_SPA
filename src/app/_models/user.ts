import { Photo } from './photo';

export class User {
    id: number;
    username: string;
    isFollowerForCurrentUser: boolean;
    email: string;
    photos: Photo[];
}
