import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { ulid } from 'ulid';

export const categories = pgTable('categories', {
	id: text('id')
		.$defaultFn(() => ulid())
		.primaryKey(),
	name: text('name').notNull(),
	created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});
