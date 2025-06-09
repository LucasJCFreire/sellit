import { categories } from '@/modules/categories/schema';
import { decimal, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { ulid } from 'ulid';

export const products = pgTable('products', {
	id: text('id')
		.$defaultFn(() => ulid())
		.primaryKey(),

	category_id: text('category_id')
		.notNull()
		.references(() => categories.id, { onDelete: 'restrict' }),

	name: text('name').notNull(),
	description: text('description').notNull(),
	producer_name: text('producer_name').notNull(),
	producer_email: text('producer_email').notNull(),
	cover: text('cover').notNull(),
	thumbnail: text('thumbnail').notNull(),

	price: decimal('price', {
		precision: 10,
		scale: 2,
		mode: 'number',
	}).notNull(),

	updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow(),
	created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});
