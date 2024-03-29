import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchStreamers } from './reducers';
import 'tachyons';

const logger = createLogger();
const store = createStore(searchStreamers, applyMiddleware(thunkMiddleware, logger))
 
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
serviceWorker.unregister();