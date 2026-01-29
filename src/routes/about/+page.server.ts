// +page.server.ts
import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { prospect } from '$lib/server/db/schema/prospects';
import { Prospect } from '$lib/server/models/Prospect';
import { toNewProspectRow } from '$lib/server/database_mappers/prospectMapper';

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		const domainProspect = Prospect.fromForm(form);
		if (!domainProspect) return { success: false };

		await db.insert(prospect).values(toNewProspectRow(domainProspect));

		return { success: true };
	}
} satisfies Actions;
