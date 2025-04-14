// pages/api/auth.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function authHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "Auth placeholder – pronto estará lista la integración con Shopify OAuth" })
}
