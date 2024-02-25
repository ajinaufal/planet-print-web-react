export class RequestRegisterEntities {
    constructor(data) {
        this.email = data?.email || '';
        this.name = data?.name || '';
        this.phone = data?.phone || '';
        this.password = data?.password || '';
    }
}
