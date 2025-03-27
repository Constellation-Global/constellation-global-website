import {useQuery} from "@tanstack/vue-query";
import type {CountryMobileCodeInterface} from "@/interfaces";
import {apiGetCountries} from "@/services";

export const useCountriesWithMobileCodes = () => {
    return useQuery<CountryMobileCodeInterface[]>({
        queryKey: ['countries', 'withMobileCodes'],
        queryFn: () => apiGetCountries(),
        refetchOnWindowFocus: false,
        // staleTime: 4 * 60 * 60 * 1000,
        enabled: true,
    });
}