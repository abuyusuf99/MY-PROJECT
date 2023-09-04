import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
    reviews:[],
}

export const fetchReviews = createAsyncThunk("reviews/fetch",
async(thunkAPI)=>{

    try {
        const res = await fetch("http://localhost:5000/Reviews")
        const reviews = await res.json()
        return reviews
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
 
})

export const addReview = createAsyncThunk("add/reviews",
async({text,user,productId}, thunkAPI)=>{
    try {
        const res = await fetch(`http://localhost:5000/Reviews`,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${thunkAPI.getState().user.token}`
            },
            body:JSON.stringify({
                text:text, user:user, productId:productId
            }),
        });
        const rev = await res.json()
        return rev
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})






const reviewsSlice = createSlice({
    name: "Reviews",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchReviews.fulfilled,(state, action)=>{
            state.reviews = action.payload
        })
        .addCase(addReview.fulfilled,(state,action)=>{
            state.reviews.unshift(action.payload)
        })
    }
})
export default reviewsSlice.reducer