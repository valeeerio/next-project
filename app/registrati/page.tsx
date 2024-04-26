"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center">
      <div className="flex justify-end w-full m-4">
        <Button
          variant="link"
          className="text-xs"
          onClick={() => router.push("/")}
        >
          Torna al Log in
        </Button>
      </div>

      <div className="w-2/5 flex flex-col justify-center text-center item-center">
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
          <Input type="text" placeholder="Organizzazione" className="w-48" />
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
    </main>
  );
}
