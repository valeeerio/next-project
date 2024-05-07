"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className="flex h-full">
      <div className="flex flex-1 border-62 border solid border-grigio">
        <div className="flex flex-col text-center w-1/2 overflow-auto">
          <div className="flex h-40">
            <Button
              variant="link"
              className="text-xs"
              onClick={() => router.push("/")}
            >
              Log in
            </Button>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-1 flex-col mt-8 mr-8 ml-8">
              <h1 className="m-4 font-bold text-lg">Register</h1>

              <div className="flex items-center justify-between my-3">
                Name
                <Input type="text" placeholder="name" className="w-48" />
              </div>
              <div className="flex items-center justify-between my-3">
                Surname
                <Input type="text" placeholder="surname" className="w-48" />
              </div>
              <div className="flex items-center justify-between my-3">
                Username
                <Input type="text" placeholder="username" className="w-48" />
              </div>
              <div className="flex items-center justify-between my-3">
                Email
                <Input type="email" placeholder="email" className="w-48" />
              </div>
              <div className="flex items-center justify-between my-3">
                Password
                <Input
                  type="password"
                  placeholder="password"
                  className="w-48"
                />
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="secondary" className="w-64">
                Register now
              </Button>
            </div>
          </div>
        </div>

        <div className="flex w-3/6 bg-qdrdestra"></div>
      </div>
    </main>
  );
}
