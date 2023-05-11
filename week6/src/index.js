import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";

const createStoreWidthMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStoreWidthMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
      <App />
  </Provider>
);