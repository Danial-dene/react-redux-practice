import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './reducers.tsx/postSlice';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    post: postsReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["post"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  createStore(
    persistedReducer,
    applyMiddleware(thunk)
)

export const persistedStore = persistStore(store)