// src/tools/products.ts
import { ShopifyClient } from '../client';

export async function listProducts(client: ShopifyClient, first: number = 10) {
    const query = `
    query getProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
    return client.query(query, { first });
}
