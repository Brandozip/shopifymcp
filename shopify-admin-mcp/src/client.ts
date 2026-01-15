// src/client.ts (copied from shared source)
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ShopifyAuth } from './auth';

export class ShopifyClient {
    private http: AxiosInstance;
    private auth: ShopifyAuth;

    constructor(auth: ShopifyAuth) {
        this.auth = auth;
        this.http = axios.create({
            baseURL: this.auth.getBaseUrl(),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.auth.getAuthHeader(),
            },
        });
    }

    async get<T = any>(path: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.get<T>(path, config);
        return response.data;
    }

    async post<T = any>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.post<T>(path, data, config);
        return response.data;
    }

    async put<T = any>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.put<T>(path, data, config);
        return response.data;
    }

    async delete<T = any>(path: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.delete<T>(path, config);
        return response.data;
    }
}
