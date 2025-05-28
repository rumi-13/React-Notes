import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

/*
1. Import Provider from react-redux and the Redux store.
2. Wrap the root <App /> component with <Provider> and pass the store prop.
   This makes the Redux store available throughout the React app.
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
