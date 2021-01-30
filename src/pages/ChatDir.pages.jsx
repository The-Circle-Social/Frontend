import React,{useState ,useEffect}  from 'react';
import {Link} from "react-router-dom"
import io from "socket.io-client"
import {uid} from "uid";
let socket;
const ChatDir = ({user}) => {
    const [groupName,setGroupName] = useState("")
    const [isCreate ,setIsCreate] = useState(false);
    const [chats,setChat] = useState([])
    useEffect(() =>{
        socket=io("127.0.0.1:3002",{transports: ['websocket']});
        setChat([
            {
                id:uid(),
                name:"user1",
                type:"private"     
            },
            {   
                id:uid(),
                name:"user2",
                type:"private"   
            },
            {
                id:uid(),
                name:"user3",
                type:"private"   
            },
            {
                id:uid(),
                name:"user4",
                type:"private"   
            },
        ])
    }, []);
    const createGroup =() => {
        if(isCreate && groupName){
            const data = {
                groupid:uid(),
                name1:"heet",
                groupname:groupName
            }
            socket.emit("newgroup",data)
            setChat([
                ...chats,
                
            ])
        }
    }

    return ( 
        <div className="">
            {
                chats.map(chat =>{
                    if(chat.type === "private"){
                        return(
                            <Link to={`/dm/heet/${chat.name}`}>{chat.name}</Link>
                        )
                    }
                    else if(chat.type === "group"){
                        return (
                            <Link to={`/group/`}>{chat.name}</Link>
                        )
                    }
                })
            }
            <button onClick={() => setIsCreate(true)}>Create Group</button>
            {
                isCreate?(
                    <div className="">
                        <input type="text" name="createGroup" id=""/>
                        <button onClick={createGroup}>Submit</button>
                    </div>
                ):null
            }
        </div>
     );
}
 
export default ChatDir;