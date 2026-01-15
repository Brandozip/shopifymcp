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
                ...this.auth.getAuthHeader(),
            },
        });
    }

    async query<T = any>(query: string, variables?: Record<string, any>): Promise<T> {
        const response = await this.http.post<T>('', { query, variables });
        return response.data;
    }
}
