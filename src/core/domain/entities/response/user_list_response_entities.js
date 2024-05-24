export class UserListResponseEntities {
  constructor(data) {
    this.status = data?.status;
    this.data = new UserListDataResponseEntities(data?.data);
    this.error_message = data?.error_message;
  }
}

class UserListDataResponseEntities {
  constructor(data) {
    this.users = new UserListUsersResponseEntities(data?.users);
  }
}

class UserListUsersResponseEntities {
  constructor(data) {
    this.username = data?.username;
    this.first_name = data?.first_name;
    this.email = data?.email;
    this.created_by = data?.created_by;
    this.updated_at = data?.updated_at;
    this.created_at = data?.created_at;
    this.token = data?.token;
    this.role = data?.role;
  }
}
