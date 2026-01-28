import { pgTable, text, serial } from 'drizzle-orm/pg-core';

export const prospect = pgTable('prospect', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email'),
    message: text('message')
});

export type NewProspect = typeof prospect.$inferInsert;
