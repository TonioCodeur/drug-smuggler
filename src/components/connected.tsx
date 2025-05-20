"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "sonner";


export default function Connected() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      toast.success("Bienvenue !", {
        description: `Vou êtes connecté en tant que ${session.user?.name || "utilisateur"} !`,
      });
    }
  }, [status, session]);

  return null;
}
