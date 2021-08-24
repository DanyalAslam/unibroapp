import thunk from 'redux-thunk';
import reducers from './reducers'
import { persistReducer, persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const persistConfig = {
    key: "hEmpirical-storage-root",
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)