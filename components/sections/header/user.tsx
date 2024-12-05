"use client"
import { logout } from "@/actions/auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Models } from "node-appwrite"
import { UserIcon } from "../../user-icon"
import { Button } from "../../ui/button"

interface UserProps{
  user: Models.User<Models.Preferences>
}
  
export function User({user}:UserProps) {
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button className="p-0 shadow-none rounded-full bg-transparent border-none outline-none">
                <UserIcon name={user?.name} img={"https://github.com/shadcn.png"} />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
            <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
            <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 font-semibold" onClick={()=>logout().then(x=>x)}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}
