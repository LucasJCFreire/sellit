import { z } from 'zod';

export const createProductSchema = z.object({
	category_id: z
		.string({ required_error: 'ID da categoria é obrigatório' })
		.length(26, { message: 'ID da categoria deve ter exatamente 26 caracteres' }),
	name: z.string({ required_error: 'Nome é obrigatório' }).min(1, { message: 'Nome é obrigatório' }),
	description: z.string({ required_error: 'Descrição é obrigatória' }).min(1, { message: 'Descrição é obrigatória' }),
	producer_name: z
		.string({ required_error: 'Nome do produtor é obrigatório' })
		.min(1, { message: 'Nome do produtor é obrigatório' }),
	producer_email: z
		.string({ required_error: 'Email do produtor é obrigatório' })
		.email({ message: 'Email do produtor inválido' }),
	cover: z.string({ required_error: 'URL da capa é obrigatória' }).url({ message: 'URL da capa inválida' }),
	thumbnail: z
		.string({ required_error: 'URL da miniatura é obrigatória' })
		.url({ message: 'URL da miniatura inválida' }),
	price: z.coerce
		.number({ required_error: 'Preço é obrigatório' })
		.positive({ message: 'Preço deve ser um número positivo' }),
});

export const productIdParamSchema = z.object({
	id: z.string().length(26, { message: 'ID do produto deve ter exatamente 26 caracteres' }),
});

export const productSearchQuerySchema = z.object({
	q: z.string().min(1, { message: 'Parâmetro de busca não pode estar vazio' }).optional(),
	limit: z.coerce
		.number()
		.min(1, { message: 'O limite mínimo é 1' })
		.max(100, { message: 'O limite máximo é 100' })
		.optional(),
	offset: z.coerce.number().min(0, { message: 'O deslocamento mínimo é 0' }).optional(),
});
