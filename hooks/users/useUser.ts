
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { API_ENDPOINTS } from "@/constants/api/api";
import { apiFetcher } from "@/lib/api-fetcher";
import { IUser } from "@/constants/interfaces";
export function useUser() {
  return useQuery({
    queryKey: [QUERY_KEYS.Users],
    queryFn: async () => {
      const res = await apiFetcher<{ data: IUser[] }>(
        API_ENDPOINTS.GET_USERS
      )
      return res.data
    },
  })
}

