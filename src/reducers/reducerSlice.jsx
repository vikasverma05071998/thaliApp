
import { createSlice } from '@reduxjs/toolkit'
import data from '../Component/data'

const initialState = {
  data,
  thali:[]
};

 export const reducerSlice = createSlice({ 
  name: 'check',

  initialState,
 
  reducers: {

     addItem:(state,action)=>{

      let itemAdd = action.payload.item;
      let index = state.data.findIndex(item => item.id === itemAdd.id);

      state.data[index].quantity = action.payload.quantity;

      state.thali = [...state.thali, state.data[index]]
        
      
    },
    removeItem:(state, action)=>{
        let itemRemoved = action.payload
        let index = state.thali.findIndex(item => item.id === itemRemoved.id)
        state.thali.splice(index, 1)
        
    },

    clearCheckedItems:(state)=>{
      state.thali.splice(0,state.thali.length)
    }
  }

});

export const {addItem, removeItem,clearCheckedItems} = reducerSlice.actions

export default reducerSlice.reducer
