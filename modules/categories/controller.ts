import { ApiError } from '@/lib/errors/api-error';
import { categoryRepository } from './repository';
import { categoryIdParamSchema, categorySchema } from './validator';

export const categoryController = {
	list: async () => {
		return categoryRepository.list();
	},

	create: async (body: unknown) => {
		const data = categorySchema.parse(body);
		return categoryRepository.create(data);
	},

	getById: async (params: unknown) => {
		const { id } = categoryIdParamSchema.parse(params);
		const category = await categoryRepository.findById(id);

		if (!category) throw new ApiError('Categoria não encontrada', 404);

		return category;
	},
};
