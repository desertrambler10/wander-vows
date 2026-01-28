import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { prospect, type NewProspect } from '$lib/server/db/schema/prospects';

export const actions = {
	default: async ({request}) => {
        const data = await request.formData();

        const name = data.get('name')?.toString().trim();
        const email = data.get('email')?.toString().trim();
        const message = data.get('message')?.toString();

        if (!name) return { success: false };

        const newProspect: NewProspect = { name, email, message };
        await db.insert(prospect).values(newProspect);

        return { success: true };
	}
} satisfies Actions;
