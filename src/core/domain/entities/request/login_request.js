export class LoginRequestEntities {
  constructor(data) {
    this.email = data?.email;
    this.password = data?.password;
  }
}
