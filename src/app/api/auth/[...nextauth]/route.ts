import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { api } from "@/src/lib/axios";
import { LoginResponse } from "@/src/@types/auth";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Senha", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api';
                    const response = await api.post<LoginResponse>(`${baseURL}/login`, {
                        email: credentials?.email,
                        password: credentials?.password,
                    });
                    const data = response.data;

                    if (response.status !== 200) return null;

                    if (data.message === "Login feito com sucesso" && data.token) {
                        const decoded = jwt.decode(data.token) as any;
                        if (decoded && decoded.userId) {

                            return {
                                id: decoded.userId,
                                email: credentials?.email,
                                name: "Usuário",
                                role: decoded.role || "USER",
                                token: data.token,
                                refreshToken: data.refreshToken,
                            };
                        }
                    }
                    window.location.href = '/';
                    return null;
                } catch (error: any) {
                    if (error.response && error.response.status === 401) {
                        const apiMessage = error.response.data?.message || "Credenciais inválidas. Verifique seu e-mail e senha.";
                        throw new Error(apiMessage);
                    }
                    console.error("Erro na autenticação:", error);
                    throw new Error("Erro ao autenticar. Tente novamente mais tarde.");
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.token;
                token.refreshToken = user.refreshToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };