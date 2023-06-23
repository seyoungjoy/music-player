import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import createMockServer from './mockServer/createMockServer';

import './styles/index.css';

createMockServer();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
