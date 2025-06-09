import { z } from 'zod';

export const categorySchema = z.object({
	name: z.string().min(1),
});

export const categoryIdParamSchema = z.object({
	id: z.string().length(26, { message: 'ID da categoria deve ter exatamente 26 caracteres' }),
});
