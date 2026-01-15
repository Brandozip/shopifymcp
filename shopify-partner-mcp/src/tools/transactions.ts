// src/tools/transactions.ts
import { ShopifyClient } from '../client';

export async function listTransactions(client: ShopifyClient, first: number = 10) {
    const query = `
    query getTransactions($first: Int!) {
      transactions(first: $first) {
        edges {
          node {
            id
            createdAt
            amount {
              amount
              currencyCode
            }
            type
          }
        }
      }
    }
  `;
    return client.query(query, { first });
}
