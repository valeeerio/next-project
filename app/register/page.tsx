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
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col m-8">
              <h1 className="m-4 font-bold text-lg">Register!</h1>

              <div className="flex flex-col items-center">
                <div className="mt-5">
                  <Input type="text" placeholder="Name" className="w-64" />
                </div>
                <div className="mt-5">
                  <Input type="text" placeholder="Surname" className="w-64" />
                </div>
                <div className="mt-5">
                  <Input type="text" placeholder="Username" className="w-64" />
                </div>
                <div className="mt-5">
                  <Input type="text" placeholder="Mail" className="w-64" />
                </div>
                <div className="mt-5">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-64"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center m-28">
              <Button
                variant="secondary"
                className="w-64"
                onClick={() => {
                  alert("registration confirmed");
                  router.push("/");
                }}
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-3/6 bg-qdrdestra"></div>
      </div>
    </main>
  );
}
