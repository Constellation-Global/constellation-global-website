import {useMutation} from "@tanstack/vue-query";
import type {SupportInterface} from "@/interfaces";
import {apiSubmitSupport} from "@/services";

export const useSubmitSupportMutation = () => {
    return useMutation({
        mutationFn: (data: SupportInterface) => apiSubmitSupport(data)
    })
}