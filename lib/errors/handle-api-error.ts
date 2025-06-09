import type { NextApiResponse } from 'next';
import { ZodError } from 'zod';
import { ApiError } from './api-error';

export function handleApiError(res: NextApiResponse, error: unknown) {
	if (error instanceof ApiError) {
		return res.status(error.statusCode).json({ message: error.message });
	}

	if (error instanceof ZodError) {
		const issues = error.errors.map((issue) => ({
			path: issue.path.join('.'),
			message: issue.message,
		}));

		return res.status(422).json({
			message: 'Erro de validação',
			issues,
		});
	}

	console.error('Erro inesperado:', error);
	return res.status(500).json({ message: 'Erro interno do servidor' });
}
