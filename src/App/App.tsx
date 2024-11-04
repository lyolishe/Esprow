import React from 'react';
import { createRoot } from 'react-dom/client';
import { Main } from '@pages/Main/Main';
import { Provider } from 'react-redux';
import { store } from './store';

const rootElement = document.getElementById('root');

// New as of React v18.x
const root = createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);
