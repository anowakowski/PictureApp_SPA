import { Photo } from "./photo";

export class User {
    id: number;
    username: string;
    IsFollowerForCurrentUser: boolean;
    email: string;
    photos: Photo[];

}
