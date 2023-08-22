import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  flacons:[],
  cart:[]
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



export const fetchCart = createAsyncThunk("cart/fetch",
 async (data) => {
  const res = await fetch("http://localhost:5000/cart");
  const cart = await res.json();
  try {
    res.json(data);
  } catch (error) {
    res.json(error);
  }
  return cart
});


export const addCart = createAsyncThunk('cart/add',
async ({prodId}, thunkAPI)=>{
  try {
    const res = await fetch('http://localhost:5000/cart',{
      method: "POST",
      headers: {
        "Content-type": 'application/json'
      },
      body:JSON.stringify({ productId:prodId})
    })
    const cart = await res.json()
    return cart
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})





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
        .addCase(fetchCart.fulfilled,(state,action)=>{
          state.cart = action.payload
      })
      .addCase(addCart.fulfilled,(state,action)=>{
        state.cart.unshift(action.payload)
      })
    }
})


export default productSlice.reducer