import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../Types';

interface FavoritesState {
    products: Products[];
}

const initialState: FavoritesState = {
    products: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Products>) => {
            state.products.push(action.payload);
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        toggleFavorite: (state, action: PayloadAction<Products>) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products.splice(index, 1);
            } else {
                state.products.push(action.payload);
            }
        },
    },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
