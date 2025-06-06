"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, DollarSign, Globe, Shield, Truck, Users } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const features = [
    {
      icon: <Briefcase className="h-10 w-10 mb-2" />,
      title: "Commerce illégal",
      description: "Achetez et vendez des marchandises sur le marché noir international"
    },
    {
      icon: <Truck className="h-10 w-10 mb-2" />,
      title: "Transport risqué",
      description: "Organisez des convois secrets et évitez les contrôles douaniers"
    },
    {
      icon: <Shield className="h-10 w-10 mb-2" />,
      title: "Protection",
      description: "Recrutez des hommes de main pour protéger vos opérations"
    },
    {
      icon: <Users className="h-10 w-10 mb-2" />,
      title: "Alliances",
      description: "Formez des cartels avec d'autres joueurs pour dominer le marché"
    },
    {
      icon: <DollarSign className="h-10 w-10 mb-2" />,
      title: "Empire financier",
      description: "Blanchissez vos gains et construisez un empire légitime"
    },
    {
      icon: <Globe className="h-10 w-10 mb-2" />,
      title: "Marché mondial",
      description: "Opérez dans différents pays avec leurs propres défis"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-gray-900 to-black opacity-90"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Drug Smuggler
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Devenez le baron de la drogue le plus redouth&eacute; du monde souterrain
          </p>
          <div className="flex gap-4 justify-center">
            {session ? (
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700"
                onClick={() => router.push('/game')}
              >
                Continuer l'aventure
              </Button>
            ) : (
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700"
                onClick={() => router.push('/login')}
              >
                Commencer à jouer
              </Button>
            )}
            <Button 
              size="lg" 
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              En savoir plus
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Construisez votre empire criminel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-red-900/20 hover:border-red-600/50 transition-colors">
                <CardHeader>
                  <div className="text-red-600">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pr&ecirc;t à dominer le march&eacute; noir ?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Rejoignez des milliers de joueurs dans la plus grande simulation de contrebande en ligne
          </p>
          {!session && (
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700"
              onClick={() => signIn('google')}
            >
              Se connecter avec Google
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
