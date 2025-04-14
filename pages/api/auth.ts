import type { NextApiRequest, NextApiResponse } from 'next'
import { shopify } from '../../lib/shopify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const shop = req.query.shop as string

  if (!shop) {
    return res.status(400).send('Falta el parámetro ?shop=...')
  }

  try {
    const authRoute = await shopify.auth.begin({
      shop,
      callbackPath: '/api/auth/callback',
      isOnline: true,
      rawRequest: req,
      rawResponse: res,
    })

    return res.redirect(authRoute)
  } catch (e) {
    console.error('Error en el proceso de autenticación', e)
    return res.status(500).send('Error en la autenticación')
  }
}
