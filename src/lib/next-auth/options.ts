import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import prisma from "../prisma";

export const nextAuthOptions: NextAuthOptions = {
  debug: false,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async ({ session, user }) => {
      return {
        ...session,
        user: {
          id: user.id,
          ...session.user,
        },
      };
    },
  },
};
