import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from './providers/AppProviders.jsx';
import { AppRouter } from './router.jsx';

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppProviders>
  );
}
