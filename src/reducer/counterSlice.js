import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const counterUpdate = createAsyncThunk(
    "counter/counterUpdate",
    async (value, thunkAPI) => {
        const responce =await fetch("http://localhost:3000/api/updatecounter")
        const data = await responce.json();
        return data;

    }

);



export const counterSlice = createSlice({

    name: "Counter",
    initialState: {
        count: 0,
      isLoading: false,
      error:"",

    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }

    },
    extraReducers: {
        [counterUpdate.fulfilled]: (state, action) => {
            console.log(state,action);
            state.isLoading= false;
            state.count+= action.payload;
          
           

        },
        [counterUpdate.pending]: (state) => {
           state.isLoading= true;
        },
        [counterUpdate.rejected]: (state,action)=> {
            console.log("rejected",action)
            state.isLoading= false;
            state.error="error in update counter"


        
        },
    }

});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;