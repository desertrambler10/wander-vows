import { pgTable, text, serial } from 'drizzle-orm/pg-core';

export const prospect = pgTable('prospect', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	message: text('message').notNull()
});

export type NewProspectRow = typeof prospect.$inferInsert;
export type ProspectRow = typeof prospect.$inferSelect;