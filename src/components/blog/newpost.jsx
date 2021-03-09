import React, { useState, useRef,useEffect } from "react";
import CreateNewPost from "./CreateNewPost";
import io from "socket.io-client";
import Cropper from "./cropper";
const NewPost = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
  
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    
    const getContent = useRef();
   
    const [id,setId] = useState("")
    const getTitle = useRef();
   
    var socket; 
   
     useEffect(()=>{
      socket = io("127.0.0.1:3008", { transports: ["websocket"] });
      return socket.disconnect;
     },[])
     const savePostImg = event =>{
        setImage(event.target.value)      
    
      }
    
    
    const savePostTitleToState = event => {
      setTitle(event.target.value);
    };
  
    const savePostContentToState = event => {
      setContent(event.target.value);
    };
  
    const toggleCreateNewPost = () => {
      setIsCreateNewPost(!isCreateNewPost);
    };
    
  // new data and id genrtation
  
  
    const savePost = (event) => {
      event.preventDefault();
      socket = io("127.0.0.1:3008", { transports: ["websocket"] });
      setId(Date.now());
      const arr = [title,id,image,"","kandarp","post"]
      console.log(title);
      socket.emit("all",arr);
      socket.emit("wanting","kandarp")
      socket.on('kandarp',(data)=>{
        console.log(data);
      })
  
      console.log(image)
      setImage("");
      setTitle("");
      setContent("");               //image id ,name,
      getTitle.current.value = "";
      toggleCreateNewPost();
    };
   const handleSubmit=(dataURI)=>{
       setImage(dataURI)
   }
    
    
    return (    
      <>
      {/* <Cropper setImage={setImage} handleSubmit={handleSubmit}/> */}
        <CreateNewPost
            savePostTitleToState={savePostTitleToState}
            // getContent={getContent}
            getTitle={getTitle}
            savePostImg={savePostImg}
            savePostContentToState={savePostContentToState}
            savePost={savePost}
            setImage={setImage}
            
          />
       
      </>
    );
  };
  export default NewPost;