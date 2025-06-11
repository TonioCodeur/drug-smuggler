import { Pool } from "pg";

async function testConnection() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  
  try {
    const client = await pool.connect();
    console.log("Connexion à la base de données réussie");
    await client.release();
  } catch (err) {
    console.error("Erreur de connexion à la base de données:", err);
  } finally {
    await pool.end();
  }
}

testConnection();