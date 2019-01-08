import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import appReducers from './reducers/index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { ActionCableProvider } from 'react-actioncable-provider';
import {API_WS_ROOT} from './constants/config';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducers,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ActionCableProvider url='ws://localhost:3000/cable'>
      <App />
    </ActionCableProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
