'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { AxiosError } from 'axios'
import { api } from '../lib/axios'

const loginSchema = z.object({
    email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
})

export type LoginState = {
    error?: string
    fieldErrors?: {
        email?: string[]
        password?: string[]
    }
}

interface LoginResponse {
    token: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}

export async function loginAction(
    prevState: LoginState | undefined,
    formData: FormData
): Promise<LoginState> {
    const validatedFields = loginSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            fieldErrors: validatedFields.error.flatten().fieldErrors,
            error: 'Dados inválidos. Verifique os campos.',
        }
    }

    const { email, password } = validatedFields.data

    try {
        const response = await api.post<LoginResponse>('/login', {
            email,
            password,
        })

        const data = response.data

        const cookieStore = await cookies();

        cookieStore.set('token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 15,
            path: '/',
        });

        cookieStore.set('refreshToken', data.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });

        cookieStore.set('user', JSON.stringify(data.user), {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });

    } catch (error) {
        console.error('Erro no login:', error)

        if (error instanceof AxiosError) {
            const errorMessage = error.response?.data?.message || 'Erro ao fazer login'
            const statusCode = error.response?.status

            console.error('Login failed:', {
                status: statusCode,
                message: errorMessage,
                email: email,
            })

            return {
                error: errorMessage
            }
        }

        return {
            error: 'Erro interno do servidor. Tente novamente.'
        }
    }

    redirect('/')
}

export async function logoutAction() {
    'use server'

    try {

        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value

        if (token) {
            await api.post('/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
    } catch (error) {
        console.error('Erro no logout:', error)
    } finally {
        cookieStore.delete('token')
        cookieStore.delete('refreshToken')
        cookieStore.delete('user')
    }

    redirect('/login')
}