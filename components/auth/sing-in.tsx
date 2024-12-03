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
import { login } from "@/actions/auth"
import { signInSchema } from "@/lib/zod"
import Link from "next/link"
import Image from "next/image"

export default function SignIn() {
  const [isPending,startTransition] = useTransition()
  const [message,setMessage] = useState("")
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values)
    startTransition(()=>{
      login(values).then(data=>{
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
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              <div className="p-3 w-full block text-center">{message}</div>
              <Button disabled={isPending} type="submit" className="w-full">Sign In</Button>
              <Link href={"/signup"} className="block tracking-normal font-semibold text-center underline">Don't have an account?</Link>
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