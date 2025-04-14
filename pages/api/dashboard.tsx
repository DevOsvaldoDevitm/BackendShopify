// pages/dashboard.tsx
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const { shop } = router.query;

  return (
    <div>
      <h1>Bienvenido al Dashboard de {shop}</h1>
      <p>Este es el área privada de tu tienda.</p>
      {/* Aquí puedes mostrar la información de la tienda o el panel de administración */}
    </div>
  );
}
