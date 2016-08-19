import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import test from '../reducers/test';
import words from '../reducers/words';

const rootReducer = combineReducers(
  {
    words,
    test,

    routing: routerReducer
  }
);

const initialState = {};

export default function configureStore() {
  let store;

  if(module.hot){
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
  }else{
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware), f => f
    ));
  }

  return store;
}
