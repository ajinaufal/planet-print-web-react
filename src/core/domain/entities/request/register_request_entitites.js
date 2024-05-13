export class RegisterRequestEntities {
    constructor(data) {
        this.username = data?.username;
        this.email = data?.email;
        this.first_name = data?.first_name;
        this.last_name = data?.last_name;
        this.password = data?.password;
    }
}
