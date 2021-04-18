import { createStore } from 'redux';
import allReducers from './reducers';
import reduxDevtoolsExtension from 'redux-devtools-extension';

const store = createStore(allReducers,
reduxDevtoolsExtension
);

export default store;