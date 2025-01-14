import 
{ 
integer,
pgTable, 
varchar, 
text, 
doublePrecision 
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from 'zod';

export const productsTable = pgTable('products', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  image: varchar({ length: 255 }),
  price: doublePrecision().notNull(),
});

export const createProductSchema = createInsertSchema(productsTable)
    .extend({ id: z.optional(z.any()) }) 
    .omit({ id: true }); 

export const updateProductSchema = createInsertSchema(productsTable)
    .extend({ id: z.optional(z.any()), role: z.optional(z.any()) }) 
    .omit({ id: true, role: true })
    .partial(); 