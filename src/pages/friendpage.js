import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useHistory, useParams } from "react-router-dom";
import { uid } from "uid";
import { Link } from "react-router-dom";
import axios from "axios";
let socket;


  const Friend = () =>{

    const [user,setUser] = useState('');
    const [friendy,setFriendy] = useState('');
    useEffect(() => {
    
        socket = io("127.0.0.1:3004", { transports: ["websocket"] });
      }, []);
    useEffect(()=>{
socket.on('error',(data)=>{
  console.log(data);
})
    })
      const clicky = ()=>{
          socket.emit('friends',{'user':user,'friendy':friendy})
      }
      return(
          <div>
            <form onSubmit={e=> e.preventDefault()}>
            <input type = "text" onChange={event => setUser(event.target.value) }></input>
            <input type = "text" onChange={event => setFriendy(event.target.value)}></input>
            <button type = "submit" onClick={clicky} >Submit</button>
            <br></br>
            <p>{friendy}</p>
            <p>{user}</p>
            
            </form>
          </div>
      )
  }

  export default Friend;