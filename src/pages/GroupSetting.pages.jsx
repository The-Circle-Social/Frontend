import {useHistory, useParams} from "react-router-dom";
import {useEffect,useState} from "react"
import axios from "axios";
import { io } from "socket.io-client";
let socket;
const GroupSetting = ({history}) => {
    const {groupid,user} = useParams(); 
    const [groupInfo,setGroupInfo] = useState({
        groupid:groupid,
        group_name:"",
        members:[],
        admins:[]
    });
    const [changeGroupName,setChangeGroupName] = useState(false)
    const [newGroupName, setNewGroupName] = useState("")
    const [currentSelect , setCurrentSelect] = useState("")
    const [selectedFriends,setSelectedFriends]= useState([])
    const [addingMember,setAddingMember] =useState(false);

    useEffect(()=>{
        socket=io("127.0.0.1:3003",{transports: ['websocket']});
    },[])
    const fetchMember =() => {
        
        axios({
            url:"http://localhost:5000/group/info",
            headers:{
                "Content-Type":"application/json"
            },
            method:"POST",
            data:{
                groupid,
                user
            }
        }).then(({data})=>
        {   
            setGroupInfo(data)
            setNewGroupName(data.group_name)
        })
        .catch(err =>{
            console.log(err.toString())
            if(err.toString().includes("401")){
                history.push("/chatdir")
            }
        })
    }
    useEffect(() => {
        socket.emit("user_connected",{
            username:user
        })
    },[]);
    useEffect(() =>{
        fetchMember()
        socket.on("group-noti" ,(data)=> {
            console.log(data)
            switch(data.type){
                case "new message":
                    alert(`${data.content.sender}  has sent new message in ${data.content.group_name} `)
                    break;
                case "deleted member":
                    console.log(data.content)
                    setGroupInfo(data.content.newGroupInfo);
                    console.log(groupInfo)
                    break;
                case "changed position":
                    setGroupInfo({...groupInfo,members:data.content.members,admins:data.content.admins,group_name:data.content.group_name});
                    break;
                case "name changed":
                    setGroupInfo({...groupInfo,group_name:data.content.new_name})
                    break;
                case "left_group":
                    history.push("/chatdir");
                    break;
                case "new member":
                    console.log(groupInfo)
                    setGroupInfo({...groupInfo,members:[...groupInfo.members,...data.content.members]});
                    setSelectedFriends([])
                    setAddingMember(false);
                    currentSelect("")
                    break;
                default:
                        break;
            }
        })
    },[])
    const removeMemeber = (member,position) => {
        if(member===user) return;
        if(position !== "admins" ){
            
             console.log("hello")
            socket.emit("remove-member" , {
                memberName:member,
                position,
                username:user,
                groupid
            })
        }
        else if(position === "admins" &&groupInfo.admins.length > 1){
            socket.emit("remove-member" , {
                memberName:member,
                position,
                username:user,
                groupid
            })
        }
        
    }
    const changePosition =(member,newPosition) =>{
        socket.emit("change-position",{
            username:member,
            newPosition,
            groupid,
            user,
        })
    }
    const onGroupChange = () => {
        socket.emit("change-groupname",{
            groupid,
            group_name:newGroupName,
            username:user
        })
    }
    const onLeaveGroup =()=>{
        socket.emit("leave-group",{
            groupid,
            user,
        })
    }
    const onFriendSelected = (friend) => {
        let arr = selectedFriends
        if(arr.indexOf(friend) === -1){
            
            arr.push(friend);
        }
        else{
            arr.splice(arr.indexOf(friend),1);
        }
        setSelectedFriends(arr)
    }
    const onAdd = () =>{
        socket.emit("add-member",{
            newMembers:selectedFriends,
            groupid,
            username:user,
            group_name:groupInfo.group_name
        })
    }
    return ( 
        <div className="">
            <h1>{groupInfo.group_name}</h1>
           {groupInfo.admins.indexOf(user) !== -1 ?( <button onClick={() => setChangeGroupName(!changeGroupName)}>✎</button>):null}

            {changeGroupName?(
                <div className="">
                    <input type="text" value={newGroupName} onChange={({target}) => setNewGroupName(target.value)}/> 
                    <button onClick={onGroupChange}>Change</button>
                </div>
            ):null}
            {
                groupInfo.admins.map(admin => (
                    <div className="">
                        <h3>{admin===user?"You":admin}</h3>
                        {groupInfo.admins.indexOf(user) !== -1 && admin !==user?<button onClick={() => currentSelect=== admin?setCurrentSelect(""):setCurrentSelect(admin)}>{currentSelect=== admin?"☝":"👇"}</button>:null}
                        {
                            currentSelect === admin && groupInfo.admins.indexOf(user) !== -1?(
                                <div className="">
                                  <button onClick={() => removeMemeber(admin,"admins")} >remove {admin}</button>
                                    <button onClick={() => changePosition(admin,"member") }> Change position to Member</button>
                                </div>
                            ):null
                        }
                        
                    </div>
                ))
            }
            {
                groupInfo.members.map(member => (
                    <div className="">
                        <h3>{member === user?"you":member}</h3>
                        {groupInfo.admins.indexOf(user) !== -1 && member !==user?(<button onClick={() => currentSelect=== member?setCurrentSelect(""):setCurrentSelect(member)}>{currentSelect=== member?"☝":"👇"}</button>):null}
                        {
                            currentSelect === member && groupInfo.admins.indexOf(user) !== -1?(
                                <div className="">
                                  <button onClick={() => removeMemeber(member,"member")}>remove {member}</button>
                                    <button onClick={() => changePosition(member,"admin") }> Change position to Admin</button>
                                </div>
                            ):null
                        }
                    </div>
                ))
            }
            
   
                        <button onClick={() => setAddingMember(!addingMember)}>Add Member</button>
                        {
                            addingMember?(
                                <>
                                    {
                                        <>
                                    {["user10","user11","user13","user14","user15"].map(friend=>(
                                        <label>
                                        {friend}:<input type="checkbox" name="" id="" onClick={()=>onFriendSelected(friend)}/>
                                        </label>

                                    ))}
                                    <button onClick={onAdd}>Add</button>
                                    </>
                                    }              
                                </>
                            ):null
                        }
            <button onClick={onLeaveGroup}>Leave Group</button>

        </div>

     );
}
 
export default GroupSetting;