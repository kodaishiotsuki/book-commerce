import { nextAuthOptions } from "@/lib/next-auth/options";
import nextAuth from "next-auth";

const handler = nextAuth(nextAuthOptions);

export { handler as POST, handler as GET };
