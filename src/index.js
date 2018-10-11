import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from 'store/configureStore';

// Import CSS reset and Global Styles
import './themes/globalStyles';

const rootElement = document.getElementById('app');
if (!rootElement) {
  throw new Error("couldn't find element with id app");
}

// Create redux store with history
const initialState = {};
const { store, persistor } = configureStore(initialState);

const render = Component =>
  ReactDOM.render(
    <div>
      <Provider store={store}>
        <Component />
      </Provider>
    </div>,
    rootElement
  );

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
