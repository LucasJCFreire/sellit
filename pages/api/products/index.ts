import { handleApiError } from '@/lib/errors/handle-api-error';
import { productController } from '@/modules/products/controller';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === 'POST') {
			const product = await productController.create(req.body);
			return res.status(201).json(product);
		}

		if (req.method === 'GET') {
			const products = await productController.search(req.query);
			return res.status(200).json(products);
		}

		return res.status(405).end(`Método ${req.method} não permitido`);
	} catch (error) {
		return handleApiError(res, error);
	}
}
