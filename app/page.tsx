"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="h-screen flex justify-center items-center text-center">
      <div className="flex h-full w-full">
        <div className="flex my-24 mx-20 flex-col justify-center">
          <div className="flex justify-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h1 className="mt-4 font-bold text-lg">Hello Again!</h1>
            <h1>Welcome back</h1>
          </div>

          <div className="mt-10">
            <div className="flex justify-center">
              <Button variant="outline" className="p-6 mx-2">
                <Avatar>
                  <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafX9X4oVKEEpBfQvuaw-VyYNuaYCyzhRwght_1_JfmA&s" />
                  <AvatarFallback>G</AvatarFallback>
                </Avatar>
                Continue whit Google
              </Button>
              <Button variant="outline" className="p-6 mx-2">
                <Avatar>
                  <AvatarImage src="https://www.facebook.com/images/fb_icon_325x325.png" />
                  <AvatarFallback>FC</AvatarFallback>
                </Avatar>
              </Button>
            </div>

            <h1 className="m-2 text-xs">Or your Email</h1>
          </div>

          <div className="mt-12 flex flex-col justify-center items-center text-center">
            <div className="felx justify-center w-2/3">
              <div className="m-3">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="m-3">
                <Input type="password" placeholder="Password" />
              </div>
            </div>

            <div className="flex justify-end"></div>

            <div className="m-3 w-max">
              <Button variant="secondary" className="w-full">
                Log in
              </Button>
            </div>
          </div>

          <div className="text-right">
            <Button
              variant="link"
              className="text-xs"
              onClick={() => router.push("/registrati")}
            >
              Register Now
            </Button>
          </div>
        </div>

        <div className="bg-slate-300 w-1/2 h-ful"></div>
      </div>
    </main>
  );
}
