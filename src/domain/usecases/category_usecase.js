export class CategoryUsecase {
    constructor(reposiotry) {
        this.category = reposiotry.category;
    }

    async get() {
        const resp = await this.category.get();
        return { data: resp?.data, status: resp?.status };
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
