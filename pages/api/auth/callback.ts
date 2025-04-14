import type { NextApiRequest, NextApiResponse } from 'next'
import { shopify } from '../../../lib/shopify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await shopify.auth.callback({
      rawRequest: req,
      rawResponse: res,
    })

    res.status(200).json({ success: true, session })
  } catch (e: unknown) {
    // Verificamos que 'e' sea un objeto de error con un mensaje
    if (e instanceof Error) {
      console.error('Error en OAuth callback:', e.message)
      res.status(500).json({ success: false, error: e.message })
    } else {
      // Si 'e' no es un Error, manejamos el caso
      console.error('Error desconocido:', e)
      res.status(500).json({ success: false, error: 'Error desconocido' })
    }
  }
}
