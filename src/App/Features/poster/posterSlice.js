import { createSlice, nanoid } from "@reduxjs/toolkit";


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
        postAdd:{
            reducer(state,action){  //slice function reduce use to wrote a action
            console.log(action);
            state.push(action.payload);
            },
            prepare(title,post){ //Prepare is callback function use to frontend validation single object dataß
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        post,
                    }
                }
            }
    }
    }
})


export const SelectAllPost=(state)=>state.posts;
export const {postAdd}=PostSlice.actions;
export default PostSlice.reducer;