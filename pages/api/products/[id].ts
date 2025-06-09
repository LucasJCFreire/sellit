import { handleApiError } from '@/lib/errors/handle-api-error';
import { productController } from '@/modules/products/controller';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === 'GET') {
			const product = await productController.getById(req.query);
			return res.status(200).json(product);
		}

		return res.status(405).end(`Método ${req.method} não permitido`);
	} catch (error) {
		return handleApiError(res, error);
	}
}
