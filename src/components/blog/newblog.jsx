import React,{useState,useEffect}  from "react";
import {useHistory}from "react-router-dom"
import io from "socket.io-client";
const Newblog = ()=>{
    let socket;

    useEffect(()=>{
        socket = io("127.0.0.1:3008", { transports: ["websocket"] });
        return socket.disconnect;
       },[])

    const [blog,setBlog] = useState("");
    const [caption,setCaption] = useState("");
    const[id,setId] = useState("");
  
    const history = useHistory();
    const handleSubmit =(e)=>{
        e.preventDefault();
        socket = io("127.0.0.1:3008", { transports: ["websocket"] });
        setId(Date.now());
        setCaption(e.target.caption.value);
        setBlog(e.target.blog.value);
      
        const arr = [caption,id,"",blog,"kandarp","blog"]
        socket.emit('all',arr);
    }
return(
    <>
    <form onSubmit={handleSubmit}>
    <input type = "text" name = "caption" placeholder="caption..."></input>
    
     <textarea
            placeholder="blog..."
            rows="8"
            cols="41"
            required
            name= "blog"
          ></textarea>
    <button type = "submit">Save</button>
    </form>
    </>
)
}
export default Newblog;