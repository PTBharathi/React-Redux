import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectAllPost } from "../../App/Features/poster/posterSlice";
import { UseDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdd } from "../../App/Features/poster/posterSlice";
import { selectAllUser } from "../../App/Features/user/userSlice";


const PostLists=()=>{
    const [post,setPost]=useState({title:"",post:""});

    // const postData=useSelector((state)=>state.posts);
    const allPost=useSelector(SelectAllPost);
    console.log(allPost);


    const dispatch=useDispatch();

    const poster=()=>{
        if(post.title && post.post){
            alert('success');


            dispatch(postAdd(post.title,post.post));

            // dispatch(postAdd(
            //     post
            // ));

            setPost({id:nanoid(),title:"",post:""});
        
        }else{
            alert("Pleae Enter The Value")
        }
    }

    const userList=useSelector(selectAllUser);

    // userList.map(item=>{
    //     console.log(item);
    // })

    console.log(userList);

    return(
        <>
        {
            allPost.map((item,index)=>{
                return(
                    < div  key={index}>
                    <h1>{item.title}</h1>
                    </div>
                )
            })
        }
          <input type="text" value={post.title} onChange={(e)=>{let data={...post}; data.title=e.target.value;setPost(data)}}/><br/><br/>
          <textarea type="text" value={post.post} onChange={(e)=>{let data={...post}; data.post=e.target.value;setPost(data)}}/><br/><br/>

          <button onClick={()=>{poster()}}>Submit</button>
        </>
    )
}

export default PostLists;