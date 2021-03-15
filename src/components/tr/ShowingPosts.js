import React,{useEffect,useState} from "react";
import Users from "./usernameList.js";
import Display from "./Display.js";
import io from "socket.io-client";
function ShowingPosts() {
  var socket; 
   const [value,setValue] = useState([]);
     useEffect(()=>{
      socket = io("127.0.0.1:3008", { transports: ["websocket"] });
      console.log(123);
      console.log(socket);
      socket.emit("wanting","kandarp");
      socket.on("kandarp",(data)=>{
        console.log(data);
        setValue(data);
      })
     })

  return (
    <div style={{ margin: "40px" }}>
      <h1 style={{ color: "blue" }}> Instagram Users </h1>
      <div className="images">
      
      </div>
      <p> The Posts </p>
      {value}
      {/* {value.map((e) => {

        return <Display name={e.name} caption={e.caption} data = {e.value}/>;
      })} */}
    </div>
  );
}
export default ShowingPosts;