Déploiement sur Vercel

Résumé rapide
- Ce projet est une application Next.js (App Router). Le build local passe (`npm run build`).
- Ce guide montre comment pousser sur GitHub, connecter à Vercel, configurer les variables d'environnement et déployer.

Checklist
- [ ] Pousser le code sur un repo GitHub
- [ ] Importer le repo dans Vercel
- [ ] Ajouter les variables d'environnement (Preview + Production)
- [ ] Déployer et tester /, /cv et l'API contact

Variables d'environnement recommandées
- MAIL_USER: ton@exemple.com
- MAIL_PASS: mot_de_passe_ou_token
- MAIL_HOST: smtp.exemple.com (ex: smtp.gmail.com)
- MAIL_PORT: 587
- OPTIONAL: MAIL_SECURE: "true" ou "false" selon provider

Étapes: pousser vers GitHub (PowerShell)
1) Initialiser le repo local (si pas encore fait) et pousser:

```powershell
# remplace <your-remote-url> par l'URL de ton repo GitHub
git init
git add .
git commit -m "Initial commit: portfolio"
git branch -M main
git remote add origin <your-remote-url>
git push -u origin main
```

2) Si ton repo existe déjà localement, juste:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

Déploiement via l'interface Vercel (recommandé)
- Va sur https://vercel.com/new
- Connecte ton compte GitHub et sélectionne le repo
- Paramètres importants:
  - Framework: Next.js (détecté automatiquement)
  - Build command: npm run build
  - Output directory: (laisser par défaut)
- Après import, va dans Settings → Environment Variables et ajoute les variables listées ci‑dessus (ajoute-les pour Preview et Production).
- Clique sur Deploy.

Déploiement via Vercel CLI (optionnel)

```powershell
npm i -g vercel
vercel login
cd D:\portfolio
vercel --prod
```

Vérifications après déploiement
- Ouvre l'URL fournie par Vercel
- Vérifie `/cv` (iframe), la page d'accueil et l'envoi via le formulaire (registre les logs si mail échoue)
- Si l'envoi d'email échoue, regarde les logs des fonctions (Vercel Dashboard > Functions > Logs)

Conseils
- Pour fiabilité, privilégie un fournisseur d'API mail (SendGrid, Mailgun, Postmark). Ils sont plus fiables que l'accès SMTP direct et simples à configurer sur Vercel.
- Si tu utilises Gmail, crée un app password (pour comptes Google avec 2FA) ou configure OAuth/SendGrid.

Souhaites-tu que je :
- ajoute les commandes exactes pour créer le repo GitHub (je peux générer le `git remote add` complet),
- ou que je lance `vercel` ici (nécessite token/connexion interactive, donc préférable depuis ta machine) ?
