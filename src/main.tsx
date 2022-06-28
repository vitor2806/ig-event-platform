import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* To use query without useEffect inside App.tsx I must use ApolloProvider with client prop, so it should work again*/}
    <App />
  </React.StrictMode>
);
