import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

store()
  .then((s) => {
    ReactDOM.render(
      // eslint-disable-next-line react/jsx-filename-extension
      <Provider store={s}>
        <App />
      </Provider>,
      document.getElementById('root'),
    );
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err.message);
  });
