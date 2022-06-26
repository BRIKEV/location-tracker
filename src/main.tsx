import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import './i18n';
import './index.scss';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>,
  );
}
