import {configureStore} from "@reduxjs/toolkit"
import productSlice from '../Features/shopSlice'
import user from '../Features/userSlice'

export const store = configureStore({
    reducer: {
        productSlice,
        user
    }
    
})