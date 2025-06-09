import { db } from '@/lib/database/connection';
import * as schemas from '@/lib/database/schemas';
import { faker } from '@faker-js/faker';

async function seed() {
	try {
		await db.delete(schemas.products);
		await db.delete(schemas.categories);

		console.log('Database reset');

		const categories = await db
			.insert(schemas.categories)
			.values([{ name: faker.commerce.department() }, { name: faker.commerce.department() }])
			.returning();

		const products = await db
			.insert(schemas.products)
			.values([
				{
					category_id: categories[0].id,
					name: faker.commerce.productName(),
					description: faker.commerce.productDescription(),
					producer_name: faker.person.fullName(),
					producer_email: faker.internet.email(),
					cover: faker.image.urlLoremFlickr({ category: 'business' }),
					thumbnail: faker.image.urlLoremFlickr({
						category: 'business',
						width: 200,
						height: 200,
					}),
					price: Number.parseFloat(faker.commerce.price()),
				},
				{
					category_id: categories[1].id,
					name: faker.commerce.productName(),
					description: faker.commerce.productDescription(),
					producer_name: faker.person.fullName(),
					producer_email: faker.internet.email(),
					cover: faker.image.urlLoremFlickr({ category: 'business' }),
					thumbnail: faker.image.urlLoremFlickr({
						category: 'business',
						width: 200,
						height: 200,
					}),
					price: Number.parseFloat(faker.commerce.price()),
				},
			])
			.returning();

		console.log('✅ Produtos inseridos:', products);
	} catch (error) {
		console.error('❌ Erro ao executar seed:', error);
		process.exit(1);
	}
}

seed();
