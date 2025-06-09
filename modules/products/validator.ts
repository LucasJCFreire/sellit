import { z } from 'zod';

export const createProductSchema = z.object({
	category_id: z.string().length(26),
	name: z.string().min(1),
	description: z.string().min(1),
	producer_name: z.string().min(1),
	producer_email: z.string().email(),
	cover: z.string().url(),
	thumbnail: z.string().url(),
	price: z.coerce.number().positive(),
});

export const productIdParamSchema = z.object({
	id: z.string().length(26),
});

export const productSearchQuerySchema = z.object({
	q: z.string().min(1).optional(),
	limit: z.coerce.number().min(1).max(100).optional(),
	offset: z.coerce.number().min(0).optional(),
});
