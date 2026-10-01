import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from '../../context/AppContext.jsx';
import { queryClient } from '../../lib/queryClient.js';

export function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>{children}</AppProvider>
    </QueryClientProvider>
  );
}
