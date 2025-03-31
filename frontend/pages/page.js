// frontend/pages/index.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, [router]);

  return (
    <div>
      <h2>Redirecting to Login...</h2>
    </div>
  );
}
