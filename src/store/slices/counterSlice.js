import {createSlice} from '@reduxjs/toolkit' 


const counterSlice = createSlice({
    name: 'Counter-slice', 
    initialState:{  
        value: 0, 
        name: '', 
        email: ''
    }, 

    reducers: { 
        add(state){ 
            state.value += 1
        }, 
        remove(state) { 
            state.value -= 1
        }, 
        addValues(state, actions){ 
            state.value += actions.payload
        }
    }
}) 
export const {add,remove,addValues} = counterSlice.actions  

export default counterSlice.reducer