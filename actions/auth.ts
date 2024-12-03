"use server"
import { createAdminClient, createSessionClient } from "@/config/appwrite"
import { signInSchema, signUpSchema } from "@/lib/zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ID } from "node-appwrite"
import { z } from "zod"

export const getLoggedInUser = async ()  =>{
    try {
        const {account} = await createSessionClient()
        const user = await account.get()
        return user
    } catch (error) {
        console.log("User not found:",error);
        return null
    }
}

export const register = async (values: z.infer<typeof signUpSchema>) => {
    try {
        const {account} = await createAdminClient()
        const {email,password,name} = values
        await account.create(ID.unique(),email,password,name)
        const session = await account.createEmailPasswordSession(email,password)
        cookies().set("gdg-session",session.secret,{
            path:"/",
            httpOnly:true,
            sameSite:"strict",
            secure:true
        })  
    } catch (error:any) {
        console.log("Registration error: ",error);
        switch(error.type){
            case "user_already_exists":
                return{error:"Email already in use"}
            default:
                return{error:"Something went wrong"}
        }
    }
    return redirect("/")
}

export const login = async (values: z.infer<typeof signInSchema>) => {
    try {
        const {account} = await createAdminClient()
        const {email,password} = values
        const session = await account.createEmailPasswordSession(email,password)
        cookies().set("gdg-session",session.secret,{
            path:"/",
            httpOnly:true,
            sameSite:"strict",
            secure:true
        })    
    } catch (error:any) {
        console.log("Login error: ",error);
        switch(error.type){
            case "user_invalid_credentials":
                return{error:"Invalid email or password"}
            default:
                return{error:"Something went wrong"}
        }
    }
    return redirect("/")
}

export const logout = async ()=>{
    try {
        const {account} = await createSessionClient()
        cookies().delete("gdg-session")
        await account.deleteSession("current") 
    } catch (error) {
        console.log("Logout error",error);
        return 
    }
}