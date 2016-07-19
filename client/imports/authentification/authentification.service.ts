import {
    Injectable
} from '@angular/core';
import {
    Users
} from '../../../collections/users.ts';
import {
    Router
} from '@angular/router';

@Injectable()
export class AuthentificationService {

    users: Mongo.Collection<User>;
    token: string;

    constructor(
        private router: Router
    ) {
        this.users = Users;
        this.token = localStorage.getItem('token');
    }


    login(user) {
        let authUser: Array<User> = this.users.find({email: user.email}).fetch();
        if (authUser.length > 0 && authUser[0].password === user.password) {
            this.token = authUser[0]._id;
            localStorage.setItem('token', this.token);
            this.router.navigate(['/dashboard']);
        }
        return false;
    }

    logout() {
        this.token = undefined;
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        this.router.navigate(['/login']);
    }


}
