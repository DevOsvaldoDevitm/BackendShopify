import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api'

const scopes = process.env.SCOPES ? process.env.SCOPES.split(',') : []

export const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  scopes: scopes,
  hostName: process.env.HOST!.replace(/^https?:\/\//, ''),
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: false,
  sessionStorage: undefined, // No es necesario especificar manualmente un almacenamiento de sesión
})
