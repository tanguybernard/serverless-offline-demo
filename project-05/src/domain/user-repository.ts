import {User} from "./user";


export interface UserRepository {

    save(user: User): string;

    getUserBy(userId: string) : User | null;
}