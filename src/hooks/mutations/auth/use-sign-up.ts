import { signUp } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignUp(callbacks?: UseMutationCallback) {
  return useMutation({
    //mutationFn에 함수를 등록해두고, mutate 호출 시 넘긴 값이 그 함수의 인자로 들어가는 구조예요.
    mutationFn: signUp,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
