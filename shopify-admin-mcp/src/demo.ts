// src/demo.ts
import { ShopifyAuth } from './auth';
import { ShopifyClient } from './client';
import { listProducts } from './tools/products';

const config = {
    apiKey: process.env.SHOPIFY_API_KEY || 'YOUR_API_KEY',
    apiSecret: process.env.SHOPIFY_API_SECRET || 'YOUR_API_SECRET',
    shopDomain: process.env.SHOPIFY_SHOP_DOMAIN || 'my-shop.myshopify.com',
};

async function main() {
    const auth = new ShopifyAuth(config);
    const client = new ShopifyClient(auth);
    const products = await listProducts(client, 5);
    console.log('First 5 products:', JSON.stringify(products, null, 2));
}

main().catch(err => console.error('Demo error:', err));
