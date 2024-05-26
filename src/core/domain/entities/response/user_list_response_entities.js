export class UserListResponseEntities {
    constructor(data) {
        this.users = (data?.users || []).map((user) => new UserListUsersResponseEntities(user));
    }
}

class UserListUsersResponseEntities {
    constructor(data) {
        this.username = data?.username;
        this.first_name = data?.first_name;
        this.email = data?.email;
        this.active = data?.active ?? false;
        this.created_by = data?.created_by;
        this.updated_at = data?.updated_at ? new Date(data?.updated_at) : '-';
        this.created_at = data?.created_at ? new Date(data?.created_at) : '-';
        this.token = data?.token;
        this.role = data?.role;
    }
}
