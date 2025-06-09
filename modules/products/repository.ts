import { db } from '@/lib/database/connection';
import { eq, ilike, or } from 'drizzle-orm';
import { products } from './schema';

export const productRepository = {
	create: async (data: typeof products.$inferInsert) => {
		return db.insert(products).values(data).returning();
	},

	list: async (limit: number, offset: number) => {
		return db.select().from(products).limit(limit).offset(offset).orderBy(products.name);
	},

	findById: async (id: string) => {
		return db.query.products.findFirst({
			where: eq(products.id, id),
		});
	},

	searchByNameOrProducer: async (query: string, limit = 10, offset = 0) => {
		return db
			.select()
			.from(products)
			.where(or(ilike(products.name, `%${query}%`), ilike(products.producer_name, `%${query}%`)))
			.limit(limit)
			.offset(offset);
	},
};
