"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex h-full">
      <div className="flex flex-1 justify-between bg-white border-62 border solid border-grigio">
        <div className="flex justify-between flex-col text-center w-1/2">
          <div className="flex h-5/6 items-center justify-center overflow-auto">
            <div className="max-h-full">
              <div className="flex justify-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </div>

              <div className="text-center mt-8 mb-20">
                <div className="font-bold text-lg">Hello Again!</div>
                <div className="text-xs">Welcome Back</div>
              </div>

              <div>
                <div className="m-3">
                  <Input type="email" placeholder="Email" className="w-64" />
                </div>
                <div className="m-3">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-64"
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    variant="link"
                    className="text-xs"
                    onClick={() => router.push("/forgotPassword")}
                  >
                    Forgot Password?
                  </Button>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="secondary"
                  className="w-64"
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                >
                  Log in
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-center items-center">
            <Button
              variant="link"
              className="text-xs"
              onClick={() => router.push("/register")}
            >
              Register Now
            </Button>
          </div>
        </div>

        <div className="flex w-3/6 bg-qdrdestra"></div>
      </div>
    </main>
  );
}
