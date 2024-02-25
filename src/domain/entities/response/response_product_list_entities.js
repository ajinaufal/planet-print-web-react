export class ResponseProductListEntities {
    constructor(data) {
        this.message = data?.error_message;
        this.data = (data?.data || []).map((data) => new ResponseProductListDataEntities(data));
    }
}

class ResponseProductListDataEntities {
    constructor(data) {
        this.sku = data?.sku;
        this.token = data?.token;
        this.title = data?.title;
        this.price = data?.price;
        this.description = data?.description;
        this.specification = data?.specification;
        this.sold = data?.sold;
        this.stocks = data?.stocks;
        this.category = new ResponseProductListCategoryEntities(data?.category);
        this.photo = (data?.photo || []).map(
            (photo) => new ResponseProductListPhotoEntities(photo)
        );
        this.created_at = data?.created_at;
    }
}

class ResponseProductListCategoryEntities {
    constructor(data) {
        this.token = data?.token;
        this.name = data?.name;
        this.image = data?.image;
        this.created_at = data?.createdAt;
        this.updated_at = data?.updatedAt;
    }
}

class ResponseProductListPhotoEntities {
    constructor(data) {
        this.created_at = data?.createdAt;
        this.token = data?.token;
        this.path = data?.path;
        this.name = data?.name;
        this.type = data?.type;
        this.size = data?.size;
        this.basename = data?.basename;
    }
}
