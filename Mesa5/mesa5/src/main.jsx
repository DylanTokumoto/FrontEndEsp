import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';
import './index.css';

import TasksReducer from './reducers/tasks-reducer';

const store = createStore(
  combineReducers({
    tasks: TasksReducer,
  })
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
