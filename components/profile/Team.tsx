import { Models } from "node-appwrite"


interface UserProps{
  user: Models.User<Models.Preferences>
}
export default function Team({user}:UserProps){
    return (
        <>
        
          <h1>Team member name: {user.$id}</h1>  
        </>
    )
}

