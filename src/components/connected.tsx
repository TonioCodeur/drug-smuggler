"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Connected() {
  const { data: session, status } = useSession() || { data: undefined, status: undefined };
  const user = session?.user;

  useEffect(() => {
    if (status === "authenticated") {
      toast.success("Bienvenue !", {
        description: `Vou êtes connecté en tant que ${user?.name || "utilisateur"} !`,
      });
    }
  }, [status, user?.name]);

  return null;
}
