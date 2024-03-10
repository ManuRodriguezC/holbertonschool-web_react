import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import uiReducer, { initialState } from './reducers/uiReducer';
import { fromJS } from 'immutable';
import reportWebVitals from './reportWebVitals';

const store = createStore(uiReducer, fromJS(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();