import { integer, varchar, text, pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from 'zod';

export const usersTable = pgTable('users', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),

    email: varchar({length: 255}).notNull().unique(),
    password: varchar({length: 255}).notNull(),
    role: varchar({length: 255}).notNull().default('user'),

    name: varchar({length: 255}),
    address: text(),

});

export const createUserSchema = createInsertSchema(usersTable)
                .extend({ id: z.optional(z.any()) })
                .omit({ id: true, role: true })

export const LoginSchema = createInsertSchema(usersTable).pick({ 
    email: true,
    password: true 
});