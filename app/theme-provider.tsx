'use client';

import { ReactNode, useEffect } from 'react';
import { useTheme } from './lib/theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  
  useEffect(() => {
  }, [theme]);
  
  return <>{children}</>;
} 