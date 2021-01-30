import React,{useEffect ,useState} from 'react'
import io from "socket.io-client"

let socket;

const GroupChat = () => {
    
    useEffect(() =>{
        socket=io("127.0.0.1:3002",{transports: ['websocket']});
        
    }, []);
    return ( 
        <div className="">
            
        </div>
     );
}
 
export default GroupChat;