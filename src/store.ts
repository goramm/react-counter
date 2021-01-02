import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { counterSlice } from './features/counter';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: counterSlice.reducer,
});

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
);

export default store;
