// src/client.ts
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

    /**
     * Generic GET request
     */
    async get<T = any>(path: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.get<T>(path, config);
        return response.data;
    }

    /**
     * Generic POST request
     */
    async post<T = any>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.post<T>(path, data, config);
        return response.data;
    }

    /**
     * Generic PUT request
     */
    async put<T = any>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.put<T>(path, data, config);
        return response.data;
    }

    /**
     * Generic DELETE request
     */
    async delete<T = any>(path: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.delete<T>(path, config);
        return response.data;
    }
}
