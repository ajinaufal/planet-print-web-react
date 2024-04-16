export class ProductRepository {
    constructor(datasources) {
        this.product = datasources.product;
    }

    async get() {
        return await this.product.get();
    }

    async create(params) {
        return await this.product.create(params);
    }

    async delete(params) {
        return await this.product.delete(params);
    }

    async update(params) {
        return await this.product.update(params);
    }
}
