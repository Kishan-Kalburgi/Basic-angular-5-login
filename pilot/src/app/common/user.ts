export class User {
    
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    profileImage: string;
    dob: string;
    status: string;

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }
}
