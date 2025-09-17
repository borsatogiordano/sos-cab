"use server";

import { getServerSession } from "next-auth";
import { getDashboardsStatsService } from "../service/dashboard";
import { useSession } from "next-auth/react";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { unstable_cache } from "next/cache";

export interface DashboardsStats {
    netProfit: {
        value: number;
        percentage: number;
        trend: number;
    };
    totalEarnings: {
        value: number;
        percentage: number;
        trend: number;
    };
    totalExpenses: {
        value: number;
        percentage: number;
        trend: number;
    };
    totalRides: {
        value: number;
        percentage: number;
        trend: number;
    };
    period: {
        start: string;
        end: string;
        type: string;
    };
}

export async function getDashboardsStats(): Promise<DashboardsStats> {
    const session = await getServerSession(authOptions);
    if (!session?.accessToken) {
        throw new Error("Token de autenticação não encontrado.");
    }
    return unstable_cache(
        async (token: string): Promise<DashboardsStats> => {
            return getDashboardsStatsService(token);
        },
        ["dashboards-stats"],
        { revalidate: 240 }
    )(session.accessToken);
}