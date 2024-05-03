"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className="flex h-full">
      <div className="flex flex-1 border-62 border solid border-grigio">
        <div className="flex flex-col text-center w-1/2">
          <div className="flex justify-end">
            <Button
              variant="link"
              className="text-xs"
              onClick={() => router.push("/")}
            >
              Torna al Log in
            </Button>
          </div>

          <div className="flex flex-1 flex-col mt-8 mr-8 ml-8">
            <h1 className="m-4 font-bold text-lg">Registrati</h1>

            <div className="flex items-center justify-between my-3">
              Data di nascita
              <Input type="date" className="w-48" />
            </div>
            <div className="flex items-center justify-between my-3">
              Città
              <Input type="text" placeholder="Città" className="w-48" />
            </div>
            <div className="flex items-center justify-between my-3">
              Email
              <Input type="email" placeholder="Email" className="w-48" />
            </div>
            <div className="flex items-center justify-between my-3">
              Nome
              <Input type="text" placeholder="Nome" className="w-48" />
            </div>
            <div className="flex items-center justify-between my-3">
              Organizzazione
              <Input
                type="text"
                placeholder="Organizzazione"
                className="w-48"
              />
            </div>
            <div className="flex items-center justify-between my-3">
              Password
              <Input type="password" placeholder="Password" className="w-48" />
            </div>
            <div className="flex items-center justify-between my-3">
              Ruolo
              <Input type="text" placeholder="Ruolo" className="w-48" />
            </div>
            <div className="flex items-center justify-between my-3">
              Cognome
              <Input type="text" placeholder="Cognome" className="w-48" />
            </div>
            <div className="flex items-center justify-between my-3">
              Username
              <Input type="text" placeholder="Username" className="w-48" />
            </div>
          </div>
        </div>

        <div className="flex w-3/6 bg-qdrdestra"></div>
      </div>
    </main>
  );
}
