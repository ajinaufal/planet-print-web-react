export class CategoryRepository {
    constructor(datasources) {
        this.category = datasources.category;
    }

    async get() {
        return this.category.get();
    }

    async create(params) {
        return this.category.create(params);
    }

    async delete(params) {
        return this.category.delete(params);
    }

    async update(params) {
        return this.category.update(params);
    }
}
