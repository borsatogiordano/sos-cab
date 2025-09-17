import { DashboardsStats } from "@/src/actions/dashboards-actions";
import { api } from "@/src/lib/axios";

export async function getDashboardsStatsService(token: string): Promise<DashboardsStats> {
    const response = await api.get("/stats", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data as DashboardsStats;
}