import React, { useState, useRef,useEffect } from "react";
import CreateNewPost from "./CreateNewPost";
import Post from "./Post";
import ModifyPost from "./ModifyPost"
import io from "socket.io-client";
import react from "react";
import {useHistory} from "react-router-dom";

// import img from "C:\\Users\\ksharda\\De /*-sktop\\TheCircle\\blogandpost\\images"


const PostBlog = () => {

  const [choosingPostBlog,setChoosingPostBlog]  =useState(false);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState("");
//   const [allPosts, setAllPosts] = useState([]);
//   const [isCreateNewPost, setIsCreateNewPost] = useState(false);
//   const [isModifyPost, setIsModifyPost] = useState(false);
//   const [editPostId, setEditPostId] = useState("");
//   const [usingex,setUsingex]=useState("")
//   const [id,setId] = useState("")
//   const getTitle = useRef();
//   const getContent = useRef();
//   const getImg = useRef();
//   // const [blogost,setblogpost]=useState(true);
//   // const blogposttoogle = ()=>tblogPost(true)
//   // }
//   var socket; 
//   // {
//   //   blogPost?setblogPost(false):se
//   const history = useHistory();
//    useEffect(()=>{
//     socket = io("127.0.0.1:3008", { transports: ["websocket"] });
//    })
  
  
//   const savePostTitleToState = event => {
//     setTitle(event.target.value);
//   };

//   const savePostContentToState = event => {
//     setContent(event.target.value);
//   };

//   const toggleCreateNewPost = () => {
//     setIsCreateNewPost(!isCreateNewPost);
//   };
  
// // new data and id genrtation


//   const savePost = async(event) => {
//     event.preventDefault();
//     const id = Date.now();
//     setId(id);
//     if (image===undefined){
//       setImage("")
//     }
//     if(content===undefined){
//       setContent("")
//     }
//     var name = "kandarp"
//     const arr = [title,id,image,content,"kandarp"]
    
//     console.log(arr[2]);
//     socket.emit("all",arr);
//     socket.emit("wanting","kandarp")
//     console.log(arr);
//     socket.on('kandarp',(data)=>{
//       console.log(data);
//     })

//     console.log(image)
//     console.log(allPosts);
//     setImage("");
//     setTitle("");
//     setContent("");               //image id ,name,
//     getTitle.current.value = "";
//     // getContent.current.value = "";
//     // getImg.current.value="";
//     toggleCreateNewPost();
//   };
// useEffect(()=>{
// history.push(`${push}`);
// },[push])
const history = useHistory();

  
  return (
    <>
      <button onClick={() => setChoosingPostBlog(!choosingPostBlog)} >{choosingPostBlog?"Cancel":"Create New"}</button>
    
      {
        choosingPostBlog?(
          <>
            <button onClick={()=>history.push("/post")}>New Post</button>

<button onClick={()=>history.push("/blog")}>New Blog</button>
          </>
        ):null
      }     
    </>
  );
};
export default PostBlog;