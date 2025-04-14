import type { NextApiRequest, NextApiResponse } from 'next'
import { shopify } from '../../../lib/shopify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const shop = req.query.shop as string;
  try {
    const { session } = await shopify.auth.callback({
      rawRequest: req,
      rawResponse: res,
    })
    res.redirect(`/?shop=${session.shop}`);
    // res.status(200).json({ success: true, session })
  } catch (e) {
    console.error('Error en el callback de OAuth:', e)
    res.status(500).json({ success: false, error: e })
  }
}
