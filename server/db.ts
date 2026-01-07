import { drizzle } from 'drizzle-orm/node-postgres';

let db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (!db) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is required");
    }
    db = drizzle(process.env.DATABASE_URL);
  }
  return db;
}
