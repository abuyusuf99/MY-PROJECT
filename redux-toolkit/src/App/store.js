import {configureStore} from "@reduxjs/toolkit"
import productSlice from '../Features/shopSlice'

export const store = configureStore({
    reducer: productSlice
})