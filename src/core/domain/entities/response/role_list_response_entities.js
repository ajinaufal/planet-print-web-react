export class RoleListResponseEntities {
    constructor(data) {
        this.roles = (data?.roles || []).map((role) => new RoleListRolesResponseEntities(role));
    }
}

class RoleListRolesResponseEntities {
    constructor(data) {
        this.token = data?.token;
        this.name = data?.name;
    }
}
