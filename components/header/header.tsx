"use client"
import Logo from "@/public/gdglogo.svg";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getLoggedInUser, logout } from "@/actions/auth";
import { useEffect, useState } from "react";
import { User } from "./user";
import { Models } from "node-appwrite";


export const Header = () => {
  const [user,setUser] = useState<Models.User<Models.Preferences> | null>()

  useEffect(()=>{
    getLoggedInUser().then(user=> user? setUser(user):null)
  },[])
  


  return ( 
    <header className="sticky top-0 backdrop-blur-sm z-30">
    <div className ="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <p className="text-white/60 hiddden md:block">GDG on Campus RBU is here  .</p>
   <div className="inline-flex gap-1 items-center">
    <Link href={"/signup"}>
    <p>
          Connect with us 🥳
    </p>
    </Link>
    
      </div>
      </div>
      <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between px-20">
        <Image src={Logo} alt="Gdg Logo" width={80} height={80}/>
        <nav className=" hidden md:flex gap-6 text-black/60 items-center">
        <Link href="/about">
            About
          </Link>
          <Link href="/features">
            Features
          </Link>
          <Link href="/team">
            Team
          </Link>
          <Link href="/adminpage">
            Admin
          </Link>
          {user? <User user={user}/> :<Link href="/signin">
            <Button>Sign In</Button>
          </Link>}
        </nav>
        </div>
      </div>
      </div>
      </header>
      );

};