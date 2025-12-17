import { useMutation } from "@tanstack/react-query";
import { apiFetcher } from "@/lib/api-fetcher";
import { ILoginPayload } from "@/constants/interfaces/auth/login";
import { ILoginResponse } from "@/constants/interfaces/auth/login";
import { API_ENDPOINTS } from "@/constants/api/api";

export function useLogin() {
  return useMutation<ILoginResponse,Error,ILoginPayload>({
    mutationFn: async (payload: ILoginPayload) => {
      return apiFetcher<ILoginResponse>(API_ENDPOINTS.AUTH.LOGIN, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    },
  });
}