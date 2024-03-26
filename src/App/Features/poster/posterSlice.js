import { createSlice } from "@reduxjs/toolkit";


const initialState=[
    {
        id:1,
        title:"Learn React Js",
        content:"It's Very Easy",
    },{
        id:2,
        title:"Learn React Js Redux",
        content:"It's Manage Global State",
    }
]


const PostSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdd(state,action){
            state.push(action.payload)
        }
    }
})


export const SelectAllPost=(state)=>state.posts;
export default PostSlice.reducer;