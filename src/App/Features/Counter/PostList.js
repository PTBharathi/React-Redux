import React from "react";
import { useSelector } from "react-redux";
import { SelectAllPost } from "../poster/posterSlice";


const PostLists=()=>{

    const postData=useSelector((state)=>console.log(state.posts));
    const allPost=useSelector(SelectAllPost);
    console.log(allPost);

    return(
        <>{
            allPost.map((item,index)=>{
                return(
                    <h1 key={item.id}>{item.title}</h1>
                )
            })
        }
        </>
    )
}

export default PostLists;