class Photo {
    constructor({ createdAt, token, path, name, type, size, basename }) {
        this.createdAt = createdAt;
        this.token = token;
        this.path = path;
        this.name = name;
        this.type = type;
        this.size = size;
        this.basename = basename;
    }
}

class Category {
    constructor({ token, name, photo, total_product, updated_at }) {
        this.token = token;
        this.name = name;
        this.photo = new Photo(photo);
        this.total_product = total_product;
        this.updated_at = updated_at;
    }
}

class Data {
    constructor({ message, data }) {
        this.message = message;
        this.data = data.map((category) => new Category(category));
    }
}
