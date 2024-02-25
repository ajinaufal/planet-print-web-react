class ResponseLoginPhotoEntities {
    constructor(data) {
        this.token = data?.token;
        this.url = data?.url;
        this.name = data?.name;
        this.size = data?.size;
        this.type = data?.type;
    }
}

export class ResponseLoginDataEntities {
    constructor(data) {
        this.name = data?.name;
        this.photo = new ResponseLoginPhotoEntities(data?.photo);
        this.email = data?.email;
        this.phone = data?.phone;
        this.role = data?.role;
        this.token = data?.token;
    }
}

export class ResponseLoginEntities {
    constructor(data) {
        this.data = new ResponseLoginDataEntities(data?.data);
        this.message = data?.message;
    }
}
