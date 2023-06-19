import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createMockServer from './mockServer/createMockServer';

// 수정 및 삭제 금지
createMockServer();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
