import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Config/api";
import { Products } from "../../Static/types";

export const fetchProducts = createAsyncThunk("products/fetchProducts",async (_, ThunkApi) => {
    try {
        const response = await api.get<Products[]>('')
        return response.data
    } catch( error) {
        if (error instanceof Error) {
            ThunkApi.rejectWithValue(error.message)
        } else {
            ThunkApi.rejectWithValue("Unknown Error Happened!")
        }
    }
})

export default fetchProducts;