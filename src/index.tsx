import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import createMockServer from './mockServer/createMockServer';

import './styles/index.css';

// createMockServer();

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
