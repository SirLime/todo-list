import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App';
import store from './reducers';

export const Context = React.createContext();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
