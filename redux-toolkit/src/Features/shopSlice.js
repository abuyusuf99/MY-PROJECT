import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  flacons:[],
  cart:[],
  user:[],
  token:localStorage.getItem('token'),
  signingUp:false,
  signingIn:false,
  error:null,

};

export const fetchProduct = createAsyncThunk("product/fetch",
 async () => {
  const res = await fetch("http://localhost:5000/products");
  const product = await res.json();
 
  return product
});



export const fetchCart = createAsyncThunk("cart/fetch",
 async () => {
  const res = await fetch("http://localhost:5000/cart");
  const cart = await res.json();
 
  return cart
});


export const fetchUser = createAsyncThunk("fetch/user",
async ()=>{
  const res = await fetch("http://localhost:5000/user",{
    method: "GET",
    headers: {
      "Content-type": 'application/json'
    },
  })
  
})






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



export const plusProd = createAsyncThunk('prod/add',
async ({number,name, price,description}, thunkAPI)=>{
  try {
    const res = await fetch('http://localhost:5000/Products',{
      method: "POST",
      headers: {
        "Content-type": 'application/json'
      },
      body:JSON.stringify({number:number , name:name,price:price,description:description})
    })
    const prod = await res.json()
    return prod
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})





export const addUser = createAsyncThunk("addUser/fetch",
async ({log, pass}, thunkAPI)=>{
  try {
    const res = await fetch('http://localhost:5000/user',{
      method: "POST",
      headers:{
        "Content-type": 'application/json'
      },
      body:JSON.stringify({ login: log, password: pass})
    })
    const user = await res.json()
    return user
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
export const userLogin  = createAsyncThunk("loginUser/fetch",
async ({log, pass}, thunkAPI)=>{
  try {
    const res = await fetch('http://localhost:5000/login',{
      method: "POST",
      headers:{
        "Content-type": 'application/json'
      },
      body:JSON.stringify({ login: log, password: pass})
    })
    const token = await res.json()
    if(token.error){
      return thunkAPI.rejectWithValue(token.error)
    }
    localStorage.setItem('token', token)
    return token
  } catch (error) {

    return thunkAPI.rejectWithValue(error.message)
  }
})





export const deleteProduct = createAsyncThunk('card/delete',
async(id, thunkAPI)=>{
  try {
    
    const res = await fetch(`http://localhost:5000/cart/${id}`,{
      method:'DELETE'
    })
    if(res.ok){
    return id
    }
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
        .addCase(plusProd.fulfilled,(state,action)=>{
          state.products.unshift(action.payload)
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
      .addCase(deleteProduct.fulfilled,(state, action)=>{
        state.cart = state.cart.filter((item)=> item._id !== action.payload)
      })
      .addCase(addUser.fulfilled,(state,action)=>{
        state.user.push(action.payload)
      })
      .addCase(addUser.rejected,(state,action)=>{
       state.error  = action.payload
        state.signingUp = false
      })
      .addCase(addUser.pending,(state)=>{
      state.signingUp = true
      state.error = null
      })
      .addCase(userLogin.fulfilled,(state, action)=>{
        state.token = action.payload
       
      })
      
    }
})


export default productSlice.reducer