export class User {
    login: string;
    email: string;
    firstName: string;
    lastName: string;
    pwd: string;
    account : number;

    constructor(
        login: string,
        email: string,
        firstName: string,
        lastName: string,
        pwd: string,
        account : number
    ) {
        this.login = login;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pwd = pwd;
        this.account = account;
    }
}
