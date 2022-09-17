import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';

import RootPage from './pages/RootPage/RootPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <RootPage />
  </React.StrictMode>
);
