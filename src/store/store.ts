import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        favorites: favoritesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
