import React,{useEffect,useState,useRef} from 'react';
import io from "socket.io-client"
import {useParams} from "react-router-dom";
import {uid} from "uid"
import {Link} from "react-router-dom"
let socket;
const PrivateChat = () => {
    const {friend ,user} = useParams();
    const [msgs,setMsgs] = useState([{
        sender:"",
        reciever:"",
        text:""
    }]);
    const [count,setCount] = useState(0)
    const [currentMsg,setCurrentMsg] = useState("")
    useEffect(()=>{
        socket=io("127.0.0.1:3003",{transports: ['websocket']});
    },[])
    useEffect(() =>{
        console.log(123);
        if(user){
            console.log(friend,user)
            socket.emit("connected",{
                user,
                friend
            });
        }
        //return socket.disconnect()
    }, []);
    useEffect(()=>{
        socket.on("recieve-message",(data) => {
          if(data.sender === friend || data.sender ===user){
          const msgArr= msgs
          msgArr.push({
              ...data,
              id:uid()
          });
          setMsgs(msgArr)
          currentMsg === " "?setCurrentMsg(""):setCurrentMsg(" ")
      }
      else{
          alert(`${data.sender} has send you a msg`)
      }
        })
    },[])

    const onClickHandle = () => {
        if(currentMsg.length > 0){
            const data= {
                sender:user,
                reciever:friend,
                text:currentMsg
            }
    
        socket.emit("send-message",data)
        const msgArr= msgs
        msgArr.push({
            ...data,
            Id:uid()
        });
        console.log(msgArr)
        setMsgs(msgArr) 
        setCurrentMsg("");

    }
    }
    const setMsg = ({target}) => {

        if(currentMsg===" "){
            setCurrentMsg("");
        }
        else{
            setCurrentMsg(target.value);
        }
        return () => setCurrentMsg(currentMsg);
    }
    return ( 
        <div className="">
                {
                    msgs.map(msg => {
                        return(
                            <div className="" key={msg.Id}>{msg.sender}:{msg.text}</div>
                        )
                    })
                }
                {/* <form action=""> */}
                    <input type="text" onChange={setMsg} value={currentMsg}/>
                    <button onClick={onClickHandle}>Submit</button>
                    <Link to="/chatdir"> back </Link>
                {/* </form> */}
                
        </div>
     );
}
 
export default PrivateChat;