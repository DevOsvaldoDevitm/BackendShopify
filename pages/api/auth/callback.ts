import type { NextApiRequest, NextApiResponse } from 'next';
import { shopify } from '../../../lib/shopify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { session } = await shopify.auth.callback({
      rawRequest: req,
      rawResponse: res,
    });

    // Después de la autenticación, redirige a la página principal
    res.redirect(`/dashboard?shop=${session.shop}`);
    // Puedes guardar la sesión o el token de acceso si lo necesitas

  } catch (e) {
    console.error('Error en el callback de OAuth:', e);
    res.status(500).json({ success: false, error: e });
  }
}
