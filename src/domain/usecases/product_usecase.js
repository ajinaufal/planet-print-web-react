import { ResponseProductListEntities } from '../entities/response/response_product_list_entities';

export class ProductUsecase {
    constructor(reposiotry) {
        this.product = reposiotry.product;
    }

    async get() {
        const resp = await this.product.get();
        return { data: new ResponseProductListEntities(resp?.data), status: resp?.status };
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
