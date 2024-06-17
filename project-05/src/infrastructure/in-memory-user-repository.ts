import {UserRepository} from "@domain/user-repository";
import {User} from "@domain/user";


export class InMemoryUserRepository implements UserRepository{

    users = new Map<string, User>();

    constructor() {
        this.users.set("1",new User("1", "John Doe"));
    }

    save(user: User): string {
        return "3";
    }

    getUserBy(userId: string): User | null {
        if(this.users.has(userId)) {
            return this.users.get(userId) as User;
        }
        return null;
    }


}