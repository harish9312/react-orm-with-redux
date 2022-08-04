import { createStore, Store } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import { IReduxStore } from '../interfaces';
import { rootReducer } from '../reducers/index';

function configureStore(): Store<IReduxStore> {
    return createStore(rootReducer, devToolsEnhancer({ name: 'ReactORM' }));
}

export const store = configureStore()