import jwt, { JwtPayload } from "jsonwebtoken";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { mongo_api } from "../../mongo";

interface AuthOptions {
  providers: any[];
  secret: string | undefined;
  callbacks: {
    session({ session, token }: any): Promise<any>;
    jwt({ token, user }: any): Promise<any>;
  };
  pages: {
    signIn: string;
  };
}

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        try {
          const response = await mongo_api.post("/user/login", {
            username: credentials.username,
            password: credentials.password,
          });

          const { token } = response.data;

          if (token) {
            const decoded = jwt.decode(token);

            if (decoded && typeof decoded !== "string") {
              const { id, name, username, photo } = decoded as JwtPayload;
              return {
                id,
                username,
                name,
                photo,
              };
            }
          }

          throw new Error("Missing credentials");
        } catch (error) {
          console.error("Error during authentication:", error);
          throw new Error("Missing credentials");
        }
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.username = token.username;
        session.user.photo = token.photo;
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.username = user.username;
        token.photo = user.photo;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
