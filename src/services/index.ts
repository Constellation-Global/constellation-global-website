import type { SupportInterface } from "@/interfaces";
import BaseService from "@/services/base.service";

export const apiSubmitSupport = (data: SupportInterface) => {
    return BaseService.post('prospects', data, {headers: {silent: true}});
}

export const apiGetCountries = () => {
    return BaseService.get('hiring/countries', {headers: {silent: true}});
}

export const apiGetIcEmployableCountries = () => {
    return BaseService.get('hiring/countries/ic-employable');
}

export const apiGetEorEmployableCountries = () => {
    return BaseService.get('hiring/countries/eor-employable');
}

export const apiGetGlobals = ({ filters, page, limit }: {
    filters: { [key: string]: any },
    page: number,
    limit: number
}) => {
    const config = {
        params: {
            filters: JSON.stringify(filters),
            page,
            limit,
        },
    }
    return BaseService.get(`/countrypedia/all`, config);
}

export const apiGetGlobalsByZone = ({ zone }: {
    zone: string
}) => {
    return BaseService.get(`/countrypedia/zone/${zone}`);
}

export const apiSearchGlobals = ({ filters }: {
    filters: { [key: string]: any },
}) => {
    const config = {
        params: {
            filters: JSON.stringify(filters),
        },
    }
    return BaseService.get(`/countrypedia/all`, config);
}

export const apiGetGlobal = ({ id }: {
    id: string
}) => {
    return BaseService.get(`/countrypedia/${id}`);
}
