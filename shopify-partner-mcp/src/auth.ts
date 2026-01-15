// src/auth.ts
export interface AuthConfig {
    partnerAccessToken: string;
    organizationId: string;
}

export class ShopifyAuth {
    private config: AuthConfig;

    constructor(config: AuthConfig) {
        this.config = config;
        if (!config.partnerAccessToken || !config.organizationId) {
            throw new Error('Missing required partner authentication configuration');
        }
    }

    getAuthHeader(): Record<string, string> {
        return {
            'X-Shopify-Access-Token': this.config.partnerAccessToken,
        };
    }

    getBaseUrl(): string {
        return `https://partners.shopify.com/${this.config.organizationId}/api/2024-04/graphql.json`;
    }
}
