import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id?: string;
    token?: string;
    refreshToken?: string;
    role?: string;
  }

  interface Session {
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
  }
}