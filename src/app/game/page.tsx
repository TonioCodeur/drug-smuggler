"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Package, TrendingUp, MapPin, Users } from "lucide-react";

export default function GamePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Chargement du jeu...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const stats = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Marchandises",
      value: "0 kg",
      description: "Stock actuel"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Fortune",
      value: "$10,000",
      description: "Capital de départ"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Territoire",
      value: "Miami",
      description: "Base d'opération"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Réputation",
      value: "Débutant",
      description: "Niveau actuel"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-red-950/5">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Bienvenue, {session.user?.name}
          </h1>
          <p className="text-muted-foreground">
            Commencez votre empire criminel à Miami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className="text-red-600">{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Actions disponibles</CardTitle>
              <CardDescription>
                Choisissez votre prochaine opération
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Package className="mr-2 h-4 w-4" />
                Acheter de la marchandise
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                Vendre sur le marché noir
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <MapPin className="mr-2 h-4 w-4" />
                Voyager vers une autre ville
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Recruter des associés
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actualités du marché</CardTitle>
              <CardDescription>
                Dernières informations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm">
                  <p className="font-medium">Miami</p>
                  <p className="text-muted-foreground">
                    La police intensifie les contrôles au port
                  </p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Los Angeles</p>
                  <p className="text-muted-foreground">
                    Prix de la cocaïne en hausse de 20%
                  </p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">New York</p>
                  <p className="text-muted-foreground">
                    Nouveau cartel cherche des partenaires
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}