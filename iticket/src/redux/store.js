import {configureStore} from '@reduxjs/toolkit'
import stateSlice from './stateSlice'

export const store = configureStore(
    {
        reducer:{
            state:stateSlice
        }
    }
)