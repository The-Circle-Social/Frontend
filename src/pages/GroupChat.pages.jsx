import React,{useEffect} from 'react';
import io from "socket.io-client"
let socket;
const GroupChat = () => {
    useEffect(() =>{
        //
        socket=io("127.0.0.1:3002",{transports: ['websocket']});
        socket.on('trial', ()=>{
            alert('Hello');
        });
        socket.on('connect', function () {
            console.log('connected!');
            socket.emit('greet', { message: 'Hello Mr.Server!' });
          });
          
          socket.on('respond', function (data) {
            console.log(data);
          });
        //return socket.disconnect()
    }, []);
    return ( 
        <div className="">
            <h1>Group Chat</h1>
        </div>
     );
}
 
export default GroupChat;