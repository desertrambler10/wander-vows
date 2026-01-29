import type { NewProspectRow } from '$lib/server/db/schema/prospects';
import { Prospect } from '$lib/server/models/Prospect';

export function toNewProspectRow(p: Prospect): NewProspectRow {
	return {
		name: p.name,
		email: p.email,
		message: p.message
	};
}
