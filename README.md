# Drug Smuggler - Jeu de Contrebande en Ligne

Un jeu de stratégie en ligne où vous construisez votre empire criminel dans le monde de la contrebande.

## 🎮 Fonctionnalités

- **Authentification sécurisée** avec Google via NextAuth
- **Interface moderne** construite avec shadcn/ui et Tailwind CSS
- **Mode sombre/clair** avec next-themes
- **Design responsive** pour mobile et desktop
- **Architecture modulaire** avec Next.js 15 et React 19

## 🚀 Installation

1. Clonez le repository
```bash
git clone https://github.com/votre-username/drug-smuggler.git
cd drug-smuggler
```

2. Installez les dépendances
```bash
pnpm install
```

3. Configurez les variables d'environnement
```bash
cp .env.example .env.local
```

Puis éditez `.env.local` avec vos propres valeurs :
- `NEXTAUTH_SECRET`: Générez une clé secrète avec `openssl rand -base64 32`
- `GOOGLE_CLIENT_ID` et `GOOGLE_CLIENT_SECRET`: Obtenez-les depuis [Google Cloud Console](https://console.cloud.google.com/)
- `DATABASE_URL`: URL de votre base de données PostgreSQL

4. Configurez la base de données (si vous utilisez Prisma)
```bash
pnpm prisma db push
```

5. Lancez le serveur de développement
```bash
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🔧 Configuration Google OAuth

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API Google+ 
4. Créez des identifiants OAuth 2.0
5. Ajoutez les URIs de redirection autorisées :
   - `http://localhost:3000/api/auth/callback/google` (développement)
   - `https://votre-domaine.com/api/auth/callback/google` (production)

## 📁 Structure du Projet

```
drug-smuggler/
├── src/
│   ├── app/              # Pages et routes Next.js
│   │   ├── api/         # Routes API
│   │   ├── game/        # Page du jeu
│   │   ├── login/       # Page de connexion
│   │   └── page.tsx     # Page d'accueil
│   ├── components/      # Composants React
│   │   ├── ui/          # Composants shadcn/ui
│   │   ├── navbar.tsx   # Barre de navigation
│   │   └── providers.tsx # Providers de l'app
│   └── lib/             # Utilitaires et configuration
│       └── auth.ts      # Configuration NextAuth
├── prisma/              # Schéma de base de données
└── public/              # Assets statiques
```

## 🛠️ Technologies Utilisées

- **Next.js 15** - Framework React
- **React 19** - Bibliothèque UI
- **NextAuth.js** - Authentification
- **shadcn/ui** - Composants UI
- **Tailwind CSS** - Styles
- **PostgreSQL** - Base de données
- **Prisma** - ORM
- **TypeScript** - Typage statique

## 📝 Licence

Ce projet est sous licence propriétaire. Voir le fichier `licence.txt` pour plus de détails.

## 🤝 Contribution

Les contributions sont fermées pour ce projet privé.

## ⚠️ Avertissement

Ce jeu est purement fictif et à des fins de divertissement uniquement. Il ne promeut en aucun cas les activités illégales.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
