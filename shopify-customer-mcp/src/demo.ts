// src/demo.ts
import { ShopifyAuth } from './auth';
import { ShopifyClient } from './client';
import { getCustomerProfile } from './tools/profile';

const config = {
    customerAccessToken: process.env.SHOPIFY_CUSTOMER_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN',
    shopDomain: process.env.SHOPIFY_SHOP_DOMAIN || 'my-shop.myshopify.com',
};

async function main() {
    const auth = new ShopifyAuth(config);
    const client = new ShopifyClient(auth);
    const profile = await getCustomerProfile(client);
    console.log('Customer Profile:', JSON.stringify(profile, null, 2));
}

main().catch(err => console.error('Demo error:', err));
