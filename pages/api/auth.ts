import type { NextApiRequest, NextApiResponse } from 'next';
import { shopify } from "../../lib/shopify";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const shop = req.query.shop as string;

  if (!shop) return res.status(400).send("Missing shop parameter");

  try {
    const authRoute = await shopify.auth.begin({
      shop,
      callbackPath: "/api/auth/callback",  // Asegúrate de que esta ruta esté bien configurada
      isOnline: true,
      rawRequest: req,
      rawResponse: res,
    });

    return res.redirect(authRoute);
  } catch (error) {
    console.error("Error en el flujo de autenticación:", error);
    return res.status(500).send("Authentication initiation failed");
  }
}
