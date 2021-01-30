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
        }).then(({data}) =>{
            setUserInfo(data.results[0])
        })
    },[])
    return ( 
        <div className="">
          {userinfo.picture && userinfo.name?
             <>
                <img src={userinfo.picture.medium || ""} alt="User"/>
                <h1>{`${userinfo.name.title} ${userinfo.name.first} ${userinfo.name.last}`}</h1>
                <p>Quaerat itaque dolorem. Rerum odio voluptatem. Dolores voluptas laborum non. Ut ipsam consequatur omnis. Perspiciatis est asperiores voluptatem voluptas sint aut. Laborum et et blanditiis quas ut est sit.</p>
            </>
           :null}
        </div>
     );
}
 
export default UserProfile;