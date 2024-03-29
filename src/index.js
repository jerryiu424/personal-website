import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';

import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
