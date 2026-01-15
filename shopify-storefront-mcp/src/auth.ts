// src/auth.ts
export interface AuthConfig {
    storefrontAccessToken: string;
    shopDomain: string; // e.g., "my-shop.myshopify.com"
}

export class ShopifyAuth {
    private config: AuthConfig;

    constructor(config: AuthConfig) {
        this.config = config;
        if (!config.storefrontAccessToken || !config.shopDomain) {
            throw new Error('Missing required storefront authentication configuration');
        }
    }

    getAuthHeader(): Record<string, string> {
        return {
            'X-Shopify-Storefront-Access-Token': this.config.storefrontAccessToken,
        };
    }

    getBaseUrl(): string {
        return `https://${this.config.shopDomain}/api/2024-04/graphql.json`;
    }
}
