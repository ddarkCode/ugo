import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import { renderRoutes } from 'react-router-config';

import Routes from './Routes';

import './index.css';

hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
);
