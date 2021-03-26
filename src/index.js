import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { searchBots } from './reducers';
import { createLogger } from 'redux-logger';


const logger = createLogger();
const store = createStore(searchBots, applyMiddleware(logger));





ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
