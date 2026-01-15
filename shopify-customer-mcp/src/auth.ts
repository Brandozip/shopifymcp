// src/auth.ts
export interface AuthConfig {
    customerAccessToken: string;
    shopDomain: string;
}

export class ShopifyAuth {
    private config: AuthConfig;

    constructor(config: AuthConfig) {
        this.config = config;
        if (!config.customerAccessToken || !config.shopDomain) {
            throw new Error('Missing required customer authentication configuration');
        }
    }

    getAuthHeader(): Record<string, string> {
        return {
            'Authorization': `Bearer ${this.config.customerAccessToken}`,
        };
    }

    getBaseUrl(): string {
        return `https://shopify.com/${this.config.shopDomain}/account/api/2024-04/graphql`;
    }
}
