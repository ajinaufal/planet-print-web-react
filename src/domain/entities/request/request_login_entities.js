export class RequestLoginEntities {
    constructor(data) {
        this.email = data?.email || '';
        this.password = data?.password || '';
    }
}
