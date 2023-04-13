import type { AppProps } from 'next/app';
import React from 'react';

import { ThemeProvider } from '@/config/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
