import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  flacons:[]
};

export const fetchProduct = createAsyncThunk("product/fetch",
 async (data) => {
  const res = await fetch("http://localhost:5000/products");
  const product = await res.json();
  try {
    res.json(data);
  } catch (error) {
    res.json(error);
  }
  return product
});



export const fetchFlacons = createAsyncThunk("flacons/fetch",         
 async (data) => {
  const res = await fetch("http://localhost:5000/flacons");
  const flacons = await res.json();
  try {
    res.json(data);
  } catch (error) {
    res.json(error);
  }
  return flacons
});






const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state, action)=>{
            state.products = action.payload
        })
        .addCase(fetchFlacons.fulfilled,(state,action)=>{
          state.flacons = action.payload
        })
    }
})


export default productSlice.reducer