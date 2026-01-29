// $lib/server/db/schema/prospects.ts
import { pgTable, text, serial } from 'drizzle-orm/pg-core';

export const prospect = pgTable('prospect', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email'),
	message: text('message')
});

export type NewProspectRow = typeof prospect.$inferInsert;
export type ProspectRow = typeof prospect.$inferSelect;