// lib/shopify.ts
import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api'
const scopes = process.env.SCOPES ? process.env.SCOPES.split(',') : [];

export const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  scopes: scopes, // Usamos el valor correcto de scopes
  hostName: process.env.HOST!.replace(/^https?:\/\//, ''),
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: false,
  sessionStorage: new (require('@shopify/shopify-api').session.MemorySessionStorage)(), // ✅ Esto siempre funciona
})
