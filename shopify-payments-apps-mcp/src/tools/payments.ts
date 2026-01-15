// src/tools/payments.ts
import { ShopifyClient } from '../client';

export async function listPaymentMethods(client: ShopifyClient) {
    const query = `
    query getPaymentMethods {
      paymentMethods(first: 10) {
        edges {
          node {
            id
            name
            supportedCountries
          }
        }
      }
    }
  `;
    return client.query(query);
}
