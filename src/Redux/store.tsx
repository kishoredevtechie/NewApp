import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loginReducer from "./loginSlice";

const rootReducer = combineReducers({
    loginAuth:loginReducer,
})

const persistConfig = {
    key:'root',
    storage:AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
    reducer:persistedReducer,
})

export const persistor = persistStore(store)
export default store;