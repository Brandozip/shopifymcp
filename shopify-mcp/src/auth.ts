// src/auth.ts
/**
 * Handles authentication for Shopify APIs.
 * Supports private app API key/secret and OAuth token flow.
 */
export interface AuthConfig {
    apiKey: string;
    apiSecret: string;
    accessToken?: string; // OAuth token if using public app
    shopDomain: string; // e.g., "my-shop.myshopify.com"
}

export class ShopifyAuth {
    private config: AuthConfig;

    constructor(config: AuthConfig) {
        this.config = config;
        if (!config.apiKey || !config.apiSecret || !config.shopDomain) {
            throw new Error('Missing required authentication configuration');
        }
    }

    /**
     * Returns the appropriate Authorization header value.
     * For private apps, uses Basic auth with API key and secret.
     * For OAuth, uses Bearer token.
     */
    getAuthHeader(): string {
        if (this.config.accessToken) {
            return `Bearer ${this.config.accessToken}`;
        }
        const token = Buffer.from(`${this.config.apiKey}:${this.config.apiSecret}`).toString('base64');
        return `Basic ${token}`;
    }

    /**
     * Helper to build the base URL for the shop.
     */
    getBaseUrl(): string {
        return `https://${this.config.shopDomain}/admin/api/2024-04`;
    }
}
