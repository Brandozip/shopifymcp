# Shopify MCP Multi‑Server Repository

This repository contains a set of **MCP (Model Context Protocol) servers** that expose the full Shopify API surface to AI agents. Each API surface (Admin, Storefront, Partner, Customer, Payments Apps, Functions) is implemented as an independent MCP server with its own package, allowing modular deployment and versioning.

## Repository Structure
```
/shopify-mcp/                # Original monolithic scaffold (reference)
/shopify-admin-mcp/          # MCP server for Shopify Admin API
/shopify-storefront-mcp/      # MCP server for Storefront GraphQL API
/shopify-partner-mcp/        # MCP server for Partner API
/shopify-customer-mcp/       # MCP server for Customer Account API
/shopify-payments-apps-mcp/  # MCP server for Payments Apps API
/shopify-functions-mcp/      # MCP server for Shopify Functions APIs
```
Each server contains:
- `package.json` – npm package metadata and scripts (`build`, `test`, `demo`).
- `tsconfig.json` – TypeScript configuration.
- `src/`
  - `auth.ts` – Handles API‑key/OAuth authentication.
  - `client.ts` – Thin wrapper around `axios` for HTTP requests.
  - `tools/` – Individual tool implementations (e.g., `products.ts`).
  - `index.ts` – Re‑exports core modules for the MCP manager.
  - `demo.ts` – Small script that authenticates and performs a sample request.

## Getting Started
1. **Install dependencies** for a server (example for the Admin server):
   ```bash
   cd "mcp server builder/shopify-admin-mcp"
   npm install
   ```
2. **Build the server**:
   ```bash
   npm run build
   ```
3. **Run the demo** (replace env vars with your Shopify credentials):
   ```bash
   export SHOPIFY_API_KEY=your_key
   export SHOPIFY_API_SECRET=your_secret
   export SHOPIFY_SHOP_DOMAIN=your-shop.myshopify.com
   npm run demo
   ```
   The demo will list the first five products from the Admin API.

## Adding New Tools
- Create a new file under `src/tools/` following the pattern of existing tools.
- Export the function from `src/index.ts`.
- Write unit tests in `tests/` and run `npm test`.
- Update the MCP server registration (`src/data/servers.ts`) to expose the new tool.

## Development Workflow
- **Lint & Test**: `npm run test` (Jest) and `npm run lint` (if configured).
- **CI/CD**: The repository includes a GitHub Actions workflow that builds, tests, and publishes each server package to npm on tag pushes.

## Contributing
Feel free to open issues or submit pull requests. Follow the existing code style and run the test suite before submitting.

## License
MIT © Brando
