import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  interface UserIconProps{
    img:string
    name:string
  }
  export function UserIcon({img,name}:UserIconProps) {
    return (
      <Avatar>
        <AvatarImage src={img} alt={name} />
        <AvatarFallback>G</AvatarFallback>
      </Avatar>
    )
  }