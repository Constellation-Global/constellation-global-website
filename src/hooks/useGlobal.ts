import {useQuery} from "@tanstack/vue-query";
import type {GlobalInterface, GlobalRequestInterface} from "@/interfaces";
import {apiGetGlobal, apiGetGlobals} from "@/services";

export const useGetGlobals = (params: GlobalRequestInterface) => {
    return useQuery<GlobalInterface[]>({
        queryKey: ['global', 'countries'],
        queryFn: () => apiGetGlobals(params),
        // staleTime: 4 * 60 * 60 * 1000,
    })
}

export const useGetGlobal = (id: string) => {
    return useQuery<GlobalInterface>({
        queryKey: ['global', 'countries', id],
        queryFn: () => apiGetGlobal({id}),
        enabled: !!id,
        staleTime: 4 * 60 * 60 * 1000,
    })
}
