import {ApiResponse, HTTPMethod, IApiStore, RequestParams, StatusHTTP,} from './types';
import qs from 'qs';

export default class ApiStore implements IApiStore {
    readonly baseUrl: string;
    constructor(url: string) {
        // TODO: Примите из параметров конструктора baseUrl
        // и присвойте его в this.baseUrl
        this.baseUrl = url;
    }

    // https://api.github.com/orgs/ktsstudio/repositories
    private getRequestData<ReqT>(params: RequestParams<ReqT>) : [string, RequestInit] {
        let endpoint = `${this.baseUrl}${params.endpoint}`;
        const req: RequestInit = {
            method: params.method,
            headers: {...params.headers}
        }
        if (params.method === HTTPMethod.GET) {
            endpoint = `${endpoint}?${qs.stringify(params.data)}`
        }
        if (params.method === HTTPMethod.POST) {
            req.body = JSON.stringify(params.data);
            req.headers = {
                ...req.headers,
                'Content-type': 'application/json;charset=utf-8'
            };

        }
        return [endpoint, req];
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        // TODO: Напишите здесь код, который с помощью fetch будет делать запрос
        // try {
        //     const response = await fetch(`${this.baseUrl}${params.endpoint}`);
        //     const data = await response.json();
        //     return {
        //         success: response.ok,
        //         data: data,
        //         status: response.status
        //     };
        // }
        // catch (error) {
        //     console.error('Ошибка:', error);
        //     return {
        //         success: false,
        //         status: StatusHTTP.parseError,
        //         data: error
        //     };
        // }
        try {
            const response = await fetch(...this.getRequestData(params));

            if (response.ok) {
                return {
                    success: true,
                    data: await response.json(),
                    status: response.status
                }
            } else {
                return {
                    success: false,
                    data: await response.json(),
                    status: response.status
                }
            }
        } catch (e) {
            return {
                success: false,
                data: null,
                status: StatusHTTP.UNEXPECTED_ERROR,
            }
        }
    }
}