import ReactDOM from 'react-dom/client'
import App from './App'
import { combineReducers, createStore } from 'redux'
import {Provider} from 'react-redux'

import ProductsReducer from './reducers/products-reducer';

const store = createStore(
  combineReducers({
  products: ProductsReducer,
  })
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
