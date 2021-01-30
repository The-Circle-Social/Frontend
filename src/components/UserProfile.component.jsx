import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import axios from  "axios";
const UserProfile = () => {
    const {username} = useParams();
    const [userinfo,setUserInfo] = useState({});
    useEffect(() => {
        axios({
            url:"https://randomuser.me/api/",
            method:"GET"
        }).then(console.log)
    })
    return ( 
        <div className="">User Profile</div>
     );
}
 
export default UserProfile;