import { handleApiError } from '@/lib/errors/handle-api-error';
import { categoryController } from '@/modules/categories/controller';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === 'POST') {
			const category = await categoryController.create(req.body);
			return res.status(201).json(category);
		}

		if (req.method === 'GET') {
			const category = await categoryController.list();
			return res.status(200).json(category);
		}

		return res.status(405).end(`Método ${req.method} não permitido`);
	} catch (error) {
		return handleApiError(res, error);
	}
}
