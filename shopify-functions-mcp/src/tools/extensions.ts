// src/tools/extensions.ts
import { ShopifyClient } from '../client';

export async function listAppExtensions(client: ShopifyClient) {
    const query = `
    query getExtensions {
      app {
        appExtensions(first: 10) {
          edges {
            node {
              id
              title
              type
            }
          }
        }
      }
    }
  `;
    return client.query(query);
}
