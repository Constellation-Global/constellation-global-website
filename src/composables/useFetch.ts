// fetch.js
import type { AxiosResponse } from 'axios'
import { ref, type Ref, type UnwrapRef } from 'vue'

interface FetchDataComposable<T> {
    data: Ref<UnwrapRef<T> | null>;
    error: Ref<string | null>;
    loading: Ref<boolean>;
    fetchData: () => Promise<void>;
  }
  

interface IProps<T> {
    api: (a?: any, b?: any) => Promise<AxiosResponse<T, any>>;
    param?: any;
    run?: boolean;
}


export const useFetch = <T,>({ api, param, run }: IProps<T>): FetchDataComposable<T> => {
    const data = ref<any>(null);

    const error = ref<string | null>(null);
    const loading = ref(false);

    const fetchData = async() => {
        error.value = null;
        loading.value = true;
      
        try {
            const response = await api(param);
            const val = response.data as any
            
            if (response.status >= 200 && response.status < 300) {
                data.value = val;
            } else {
                throw new Error("An Error Occured")
            }
        } catch (err: any) {
            console.log("caught", err)
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                error.value = `Error: ${err.response.status} - ${err.response?.data?.message || "An error occured"}`;
              } else if (err.request) {
                // The request was made but no response was received
                error.value = 'Error: No response received';
              } else {
                // Something happened in setting up the request that triggered an Error
                error.value = `Error: ${err.message || 'An error occured'}`;
              }
            } finally {
              loading.value = false;
            }
    }

    if (run) {
      fetchData()
    }
    return { data, error, loading, fetchData }
}