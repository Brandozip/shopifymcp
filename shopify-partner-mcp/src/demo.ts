// src/demo.ts
import { ShopifyAuth } from './auth';
import { ShopifyClient } from './client';
import { listTransactions } from './tools/transactions';

const config = {
    partnerAccessToken: process.env.SHOPIFY_PARTNER_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN',
    organizationId: process.env.SHOPIFY_ORGANIZATION_ID || 'YOUR_ORG_ID',
};

async function main() {
    const auth = new ShopifyAuth(config);
    const client = new ShopifyClient(auth);
    const transactions = await listTransactions(client, 5);
    console.log('First 5 transactions (Partner):', JSON.stringify(transactions, null, 2));
}

main().catch(err => console.error('Demo error:', err));
