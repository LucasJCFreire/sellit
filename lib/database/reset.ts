import { db } from '@/lib/database/connection';
import * as schemas from '@/lib/database/schemas';

async function reset() {
	try {
		await db.delete(schemas.products);
		await db.delete(schemas.categories);

		console.log('Banco de dados resetado com sucesso.');
	} catch (error) {
		console.error('Erro ao resetar banco de dados:', error);
		process.exit(1);
	}
}

reset();
