import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    isFollowerForCurrentUser: boolean;
    email: string;
    photos: Photo[];
    photoUrl: string;
}
