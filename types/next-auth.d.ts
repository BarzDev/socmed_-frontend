// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string | null; // Add the username property
      name?: string | null;
      email?: string | null;
      photo?: string | null;
      username?: string | null; // Add the username property
    };
  }

  interface User {}
}
