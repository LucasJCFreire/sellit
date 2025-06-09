import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({
		openapi: '3.0.0',
		info: {
			title: 'Sellit API',
			version: '1.0.0',
			description:
				'Desafio sellit - API Restful em Nextjs.\n\nDesenvolvedor: Lucas Jones\n- [Portfólio](https://lucasjcfreire.vercel.app/)\n- [LinkedIn](https://www.linkedin.com/in/lucasjcfreire/)',
		},
		tags: [
			{
				name: 'Categorias',
				description: 'Cria e busca categorias',
			},
			{
				name: 'Produtos',
				description: 'Cria e busca produtos',
			},
		],
		paths: {
			'/api/products': {
				post: {
					tags: ['Produtos'],
					summary: 'Cria um novo produto',
					requestBody: {
						required: true,
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/Product',
								},
							},
						},
					},
					responses: {
						'201': {
							description: 'Produto criado com sucesso',
						},
					},
				},
				get: {
					tags: ['Produtos'],
					summary: 'Busca todos os produtos ou filtrar por nome ou produtor',
					parameters: [
						{
							name: 'q',
							in: 'query',
							required: false,
							schema: {
								type: 'string',
							},
						},
						{
							name: 'limit',
							in: 'query',
							required: false,
							schema: {
								type: 'integer',
								minimum: 1,
								maximum: 100,
							},
						},
						{
							name: 'offset',
							in: 'query',
							required: false,
							schema: {
								type: 'integer',
								minimum: 0,
							},
						},
					],
					responses: {
						'200': {
							description: 'Lista de produtos encontrados',
							content: {
								'application/json': {
									schema: {
										type: 'array',
										items: {
											$ref: '#/components/schemas/Product',
										},
									},
								},
							},
						},
					},
				},
			},
			'/api/products/{id}': {
				get: {
					tags: ['Produtos'],
					summary: 'Busca produto pelo ID',
					parameters: [
						{
							name: 'id',
							in: 'path',
							required: true,
							schema: {
								type: 'string',
								minLength: 26,
								maxLength: 26,
							},
						},
					],
					responses: {
						'200': {
							description: 'Produto encontrado',
							content: {
								'application/json': {
									schema: {
										$ref: '#/components/schemas/Product',
									},
								},
							},
						},
						'404': {
							description: 'Produto não encontrado',
						},
					},
				},
			},
			'/api/categories': {
				post: {
					tags: ['Categorias'],
					summary: 'Cria uma nova categoria',
					requestBody: {
						required: true,
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/Category',
								},
							},
						},
					},
					responses: {
						'201': {
							description: 'Categoria criada com sucesso',
						},
					},
				},
				get: {
					tags: ['Categorias'],
					summary: 'Lista todas as categorias',
					responses: {
						'200': {
							description: 'Lista de categorias',
							content: {
								'application/json': {
									schema: {
										type: 'array',
										items: {
											$ref: '#/components/schemas/Category',
										},
									},
								},
							},
						},
					},
				},
			},
			'/api/categories/{id}': {
				get: {
					tags: ['Categorias'],
					summary: 'Busca uma categoria pelo ID',
					parameters: [
						{
							name: 'id',
							in: 'path',
							required: true,
							schema: {
								type: 'string',
								minLength: 26,
								maxLength: 26,
							},
						},
					],
					responses: {
						'200': {
							description: 'Categoria encontrada',
							content: {
								'application/json': {
									schema: {
										$ref: '#/components/schemas/Category',
									},
								},
							},
						},
						'404': {
							description: 'Categoria não encontrada',
						},
					},
				},
			},
		},
		components: {
			schemas: {
				Product: {
					type: 'object',
					properties: {
						id: {
							type: 'string',
							example: '01J49K9MD3PCHX289ZA5BCT713',
						},
						category_id: {
							type: 'string',
						},
						name: {
							type: 'string',
						},
						description: {
							type: 'string',
						},
						producer_name: {
							type: 'string',
						},
						producer_email: {
							type: 'string',
						},
						cover: {
							type: 'string',
							format: 'uri',
						},
						thumbnail: {
							type: 'string',
							format: 'uri',
						},
						price: {
							type: 'number',
						},
						created_at: {
							type: 'string',
							format: 'date-time',
						},
						updated_at: {
							type: 'string',
							format: 'date-time',
						},
					},
				},
				Category: {
					type: 'object',
					properties: {
						id: {
							type: 'string',
							example: 'abc123',
						},
						name: {
							type: 'string',
							example: 'Eletrônicos',
						},
						created_at: {
							type: 'string',
							format: 'date-time',
						},
						updated_at: {
							type: 'string',
							format: 'date-time',
						},
					},
				},
			},
		},
	});
}
