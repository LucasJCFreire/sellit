import { handleApiError } from '@/lib/errors/handle-api-error';
import { categoryController } from '@/modules/categories/controller';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { id } = req.query;

		if (req.method === 'GET') {
			const category = await categoryController.getById({ id });
			return res.status(200).json(category);
		}

		return res.status(405).end(`Método ${req.method} não permitido`);
	} catch (error) {
		return handleApiError(res, error);
	}
}
