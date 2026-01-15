// src/demo.ts
import { ShopifyAuth } from './auth';
import { ShopifyClient } from './client';
import { listAppExtensions } from './tools/extensions';

const config = {
    apiKey: process.env.SHOPIFY_API_KEY || 'YOUR_API_KEY',
    apiSecret: process.env.SHOPIFY_API_SECRET || 'YOUR_API_SECRET',
};

async function main() {
    const auth = new ShopifyAuth(config);
    const client = new ShopifyClient(auth);
    const extensions = await listAppExtensions(client);
    console.log('App Extensions:', JSON.stringify(extensions, null, 2));
}

main().catch(err => console.error('Demo error:', err));
