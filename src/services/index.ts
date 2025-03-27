import type {
    CountryMobileCodeInterface,
    GlobalInterface, GlobalRequestInterface,
    SupportInterface, SupportResponseInterface
} from "@/interfaces";
import BaseService from "@/services/base.service";

export const apiSubmitSupport = async (data: SupportInterface):Promise<SupportResponseInterface> => {
    return (await BaseService.post('prospects', data, {headers: {silent: true}})).data;
}

export const apiGetCountries = async (): Promise<CountryMobileCodeInterface[]> => {
    return (await BaseService.get('countrypedia/countries-mobile-code', {headers: {silent: true}})).data;
}

export const apiGetGlobals = async ({filters, page, limit}: GlobalRequestInterface): Promise<GlobalInterface[]> => {
    const config = {
        params: {
            filters: JSON.stringify(filters),
            page,
            limit,
        },
    }
    return (await BaseService.get(`/countrypedia/all`, config)).data;
}

export const apiGetGlobalsByZone = async ({zone}: { zone: string }): Promise<GlobalInterface[]> => {
    return (await BaseService.get(`/countrypedia/zone/${zone}`)).data;
}

export const apiSearchGlobals = async ({filters}: GlobalRequestInterface): Promise<GlobalInterface[]> => {
    const config = {
        params: {
            filters: JSON.stringify(filters),
        },
    }
    return (await BaseService.get(`/countrypedia/all`, config)).data;
}

export const apiGetGlobal = async ({id}: { id: string }): Promise<GlobalInterface> => {
    return (await BaseService.get(`/countrypedia/${id}`)).data;
}
