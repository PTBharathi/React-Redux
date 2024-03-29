import { createSlice } from "@reduxjs/toolkit";


const initialState=[
    {id:'0',name:'Bharathi' },
    {id:'1',name:'Raja'}
]

const userSlice=()=>createSlice({
    name:'user',
    initialState,
    reducers:{}
})

export const selectAllUser=(state)=>state.user;

export default userSlice.reducer;
