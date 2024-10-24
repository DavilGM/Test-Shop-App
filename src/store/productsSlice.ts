import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Products } from '../Types';

interface ProductsState {
    products: Products[];
}

const initialState: ProductsState = {
    products: [],
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        const convertedData = data.map((product: any) => ({
            ...product,
            id: parseInt(product.id, 10)
        }));
        return convertedData as Products[];
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Products[]>) => {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Products[]>) => {
            state.products = action.payload;
        });
    },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
