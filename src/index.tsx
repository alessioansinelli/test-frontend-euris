import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/Components';
import { QueryClient, QueryClientProvider } from 'react-query';

const container = document.getElementById('app')!;
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
