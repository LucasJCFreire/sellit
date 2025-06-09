import { ApiError } from '@/lib/errors/api-error';
import { productRepository } from './repository';
import { createProductSchema, productIdParamSchema, productSearchQuerySchema } from './validator';

export const productController = {
	create: async (body: unknown) => {
		const data = createProductSchema.parse(body);
		return productRepository.create(data);
	},

	getById: async (params: unknown) => {
		const { id } = productIdParamSchema.parse(params);
		const product = await productRepository.findById(id);

		if (!product) throw new ApiError('Produto não encontrado', 404);

		return product;
	},

	search: async (query: unknown) => {
		const { q, limit = 10, offset = 0 } = productSearchQuerySchema.parse(query);
		if (q) {
			return productRepository.searchByNameOrProducer(q, limit, offset);
		}

		return productRepository.list(limit, offset);
	},
};
