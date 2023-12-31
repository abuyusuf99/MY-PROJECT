import {configureStore} from "@reduxjs/toolkit"
import productSlice from '../Features/shopSlice'
import user from '../Features/userSlice'
import reviewSlice from '../Features/reviewsSlice'

export const store = configureStore({
    reducer: {
        productSlice,
        user,
        reviewSlice
    }
    
})