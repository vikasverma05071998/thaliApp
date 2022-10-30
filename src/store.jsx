import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "./reducers/reducerSlice";

const store = configureStore({
    reducer:{
        check:reducerSlice
        
    }
})

export default store   