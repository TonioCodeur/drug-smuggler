import NextAuth from "next-auth"
import PostgresAdapter from "@auth/pg-adapter"
import GoogleProvider from "next-auth/providers/google"
import { Pool } from "pg"

const handler = NextAuth({
  adapter: PostgresAdapter(new Pool({ connectionString: process.env.DATABASE_URL })),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ]
})

export { handler as GET, handler as POST }