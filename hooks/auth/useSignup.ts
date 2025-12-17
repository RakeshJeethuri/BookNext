import { useMutation } from "@tanstack/react-query";
import { apiFetcher } from "@/lib/api-fetcher";
import { ISignupPayload } from "@/constants/interfaces/auth/signup";
import { ISignupResponse } from "@/constants/interfaces/auth/signup";
import { API_ENDPOINTS } from "@/constants/api/api";


export function useSignup() {
  return useMutation<ISignupResponse, Error, ISignupPayload>({
    mutationFn: async (payload: ISignupPayload) => {
      return await apiFetcher<ISignupResponse>(
        API_ENDPOINTS.AUTH.SIGNUP,{
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
      );
    },
  });
}