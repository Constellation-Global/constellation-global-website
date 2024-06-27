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
