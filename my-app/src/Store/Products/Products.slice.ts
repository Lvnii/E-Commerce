import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../Static/types";
import fetchProducts from "./Products.async.Actions";

type InitialState = {
    status: "idle" | "loading" | "loaded" | "failed",
    data: Products[],
    error: undefined | string
}

const initialState: InitialState = {
    status: "idle",
    data: [],
    error: undefined
}

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
        state.status = "loading"
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "loaded"
        if (action.payload) {
            state.data = action.payload 
        }
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
    })
  }
})

export default ProductSlice.reducer;