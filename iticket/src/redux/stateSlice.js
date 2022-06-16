import {createSlice} from "@reduxjs/toolkit"

export const stateSlice = createSlice({
    name:"state",
    initialState:{
        localCount: 0
    },
    reducers:{
        decrease:(state,action)=>
        {
            state.localCount++
        }
    }
})

export const {decrease} = stateSlice.actions
export default stateSlice.reducer