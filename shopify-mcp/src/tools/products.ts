// src/tools/products.ts
import { ShopifyClient } from '../client';

/**
 * List products from the Shopify Admin API.
 * Returns the raw JSON response containing an array of products.
 */
export async function listProducts(client: ShopifyClient, limit: number = 10) {
    // Shopify Admin API endpoint for products
    const path = `/products.json?limit=${limit}`;
    return client.get(path);
}

/**
 * Retrieve a single product by its ID.
 */
export async function getProduct(client: ShopifyClient, productId: number) {
    const path = `/products/${productId}.json`;
    return client.get(path);
}
