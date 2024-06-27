import { appConfig } from "@/configs/app.config";
import axios from "axios";

const BaseService = axios.create({
    baseURL: appConfig.baseUrl,
    timeout: 50000,
    proxy: false,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
})

export default BaseService