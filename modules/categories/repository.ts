import { db } from '@/lib/database/connection';
import { eq } from 'drizzle-orm';
import { categories } from './schema';

export const categoryRepository = {
	list: async () => {
		return db.select().from(categories).orderBy(categories.name);
	},

	create: async (data: typeof categories.$inferInsert) => {
		return db.insert(categories).values(data).returning();
	},

	findById: async (id: string) => {
		return db.query.categories.findFirst({
			where: eq(categories.id, id),
		});
	},
};
