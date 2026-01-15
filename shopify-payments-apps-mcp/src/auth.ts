// src/auth.ts
export interface AuthConfig {
    apiKey: string;
    apiSecret: string;
}

export class ShopifyAuth {
    private config: AuthConfig;

    constructor(config: AuthConfig) {
        this.config = config;
        if (!config.apiKey || !config.apiSecret) {
            throw new Error('Missing required payments apps authentication configuration');
        }
    }

    getAuthHeader(): Record<string, string> {
        const token = Buffer.from(`${this.config.apiKey}:${this.config.apiSecret}`).toString('base64');
        return {
            'Authorization': `Basic ${token}`,
        };
    }

    getBaseUrl(): string {
        return `https://payments.shopify.com/api/2024-04/graphql.json`;
    }
}
