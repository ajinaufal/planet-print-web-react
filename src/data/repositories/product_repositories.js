export class ProductRepository {
    constructor(datasources) {
        this.product = datasources.product;
    }

    async get() {
        return this.product.get();
    }

    async create(params) {
        return this.product.create(params);
    }

    async delete(params) {
        return this.product.delete(params);
    }

    async update(params) {
        return this.product.update(params);
    }
}
