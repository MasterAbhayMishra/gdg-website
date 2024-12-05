import { Models } from "node-appwrite"


interface UserProps{
  user: Models.User<Models.Preferences>
}
export default function User({user}:UserProps){
    return (
        <>
        
          <h1> user name: {user.$id}</h1>  
        </>
    )
}

