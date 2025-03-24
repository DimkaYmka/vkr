'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useUserStore } from '@/store/user';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  useEffect(() => {
    const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register');

    if (!isAuthenticated && !isAuthPage && pathname !== '/') {
      router.replace('/login');
    }

    if (isAuthenticated && isAuthPage) {
      router.replace('/transactions');
    }
  }, [isAuthenticated, pathname, router]);

  return <>{children}</>;
} 