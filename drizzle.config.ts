import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: './lib/database/migrations',
	schema: './lib/database/schemas.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
	},
});
