"use client"
import { Models } from "node-appwrite"
import { useEffect,useState } from "react"
import { getLoggedInUser } from "@/actions/auth"
import AdminDashboard from "@/components/admin/AdminDashboard"
import User from "./user"
import Team from "./Team"


interface UserProps{
  user: Models.User<Models.Preferences>
}
export default function Profile(){
  const [user,setUser] = useState<Models.User<Models.Preferences> | null>()

  
  useEffect(()=>{
    getLoggedInUser().then(user=> user? setUser(user):null)
  },[])
    
  if (!user) {
    return <h1>User not found</h1>;
  }
    
      if(user.labels.includes("ADMIN")){
        return(
          <AdminDashboard/>
        );
        
      }
      else if(user.labels.includes("TEAM")){
        return <Team user={user}/>;
      }
      else{
        return  <User user={user}/>
      }
}


