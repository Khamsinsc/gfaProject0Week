import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

console.log(rootReducer);
const store = createStore(rootReducer, composeWithDevTools());

export { store };