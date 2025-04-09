import { createSlice } from "@reduxjs/toolkit";

const initiaValue = {
    addressList : []
}

const addressSlice = createSlice ({
    name : 'address',
    initialState : initiaValue,
    reducers : {
        handleAddAddress : (state,action) => {
            state.addressList = [...action.payload]
        }
    }
})

export const { handleAddAddress } = addressSlice.actions

export default addressSlice.reducer