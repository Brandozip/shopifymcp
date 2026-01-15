// src/tools/profile.ts
import { ShopifyClient } from '../client';

export async function getCustomerProfile(client: ShopifyClient) {
    const query = `
    query getCustomer {
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
    }
  `;
    return client.query(query);
}
