"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "sonner";


export default function Connected() {
  const session = useSession();
  const status = session.status;
  const user = session.data?.user;


  useEffect(() => {
    if (status === "authenticated") {
      toast.success("Bienvenue !", {
        description: `Vou êtes connecté en tant que ${user?.name || "utilisateur"} !`,
      });
    }
  }, [status, session]);

  return null;
}
