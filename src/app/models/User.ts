export class User {
    login: string;
    email: string;
    firstName: string;
    lastName: string;
    pwd: string;
    repeatPassword: string;

    constructor(
        login: string,
        email: string,
        firstName: string,
        lastName: string,
        pwd: string,
    ) {
        this.login = login;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pwd = pwd;
    }
}
