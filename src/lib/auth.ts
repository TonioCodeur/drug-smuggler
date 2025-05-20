import PostgresAdapter from "@auth/pg-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { Pool } from "pg"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(new Pool({ connectionString: process.env.DATABASE_URL })),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ]
})