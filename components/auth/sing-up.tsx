"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useTransition } from "react"
import { register } from "@/actions/auth"
import { signUpSchema } from "@/lib/zod"
import Link from "next/link"
import Image from "next/image"

export default function SignUp() {
  const [isPending,startTransition] = useTransition()
  const [message,setMessage] = useState("")
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name:""
    },
  })

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values)
    startTransition(()=>{
      register(values).then(data=>{
        if(data?.error){
          return setMessage(data.error)
        }
      })
    })
  }

  return (
    <div className="flex items-start justify-start mt-[100px] mx-[320px] min-h-[100vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="p-3 text-wrap w-full block text-center">{message}</div>
              <Button disabled={isPending} type="submit" className="w-full">Sign Up</Button>
              <Link href={"/signin"} className="block tracking-normal font-semibold text-center underline">Already have an account?</Link>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Image
				src="/sidebar.svg"
				alt="Sidebar"
				height={200}
				width={200}
				className="absolute md:w-1/5 right-0 top-0 z-20 max-md:-right-20 overflow-x-hidden max-md:top-8 max-md:h-80 max-md:-z-10"
			/>
    </div>
  )
}