# Projet E-commerce

Ce projet e-commerce est développé avec une architecture full-stack utilisant Express pour le backend, React pour le frontend, Sequelize pour la gestion de la base de données MySQL, et plusieurs autres technologies pour l'authentification, la gestion d'état et le stockage des médias.

---

## Table des Matières

- [Aperçu](#aperçu)
- [Conception](#conception)
- [Fonctionnalités](#fonctionnalités)
  - [Tableau de bord Admin](#tableau-de-bord-admin)
  - [Client](#client)
  - [Vendeur](#vendeur)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
  - [Prérequis](#prérequis)
  - [Étapes d'Installation](#étapes-dinstallation)
- [Structure du Projet](#structure-du-projet)
- [Développement](#développement)
- [Prochaines Étapes](#prochaines-étapes)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## Aperçu

Ce projet se concentre sur l'itération rapide et le déploiement continu, avec un accent sur l'apprentissage de la collaboration efficace au sein d'une équipe. Les principaux objectifs incluent :

- Documentation efficace du projet.
- Compétences en dynamique de groupe et collaboration.
- Mise en œuvre et architecture robustes du produit.
- Conception complète du produit.

Le projet suit une approche de sprint, avec des fonctionnalités clés priorisées et mises en œuvre dans un délai d'une semaine. Les équipes sont censées itérer et améliorer le produit tout en maintenant une documentation claire et complète.

---

## Conception

Le projet est conçu pour être centré sur l'utilisateur, avec des fonctionnalités distinctes pour différents rôles d'utilisateurs : Admin, Client et Vendeur. La philosophie de conception met l'accent sur l'utilisabilité, la sécurité et la performance.

Les équipes doivent :

- Documenter le code, le style de syntaxe et les workflows git.
- Esquisser une feuille de route des fonctionnalités.
- Utiliser des modèles Figma comme guides de conception.

---

## Fonctionnalités

Voici une organisation structurée des fonctionnalités pour les rôles Admin, Client et Vendeur dans votre projet e-commerce :

### Tableau de bord Admin

- **Connexion Sécurisée** :  
  En tant qu'admin, je veux pouvoir me connecter de manière sécurisée au tableau de bord admin.
- **Gestion des Clients Enregistrés** :  
  En tant qu'admin, je veux pouvoir voir et gérer la liste des clients enregistrés.
- **Gestion des Vendeurs Enregistrés** :  
  En tant qu'admin, je veux pouvoir voir et gérer la liste des vendeurs enregistrés.
- **Gestion des Catégories** :  
  En tant qu'admin, je veux avoir la possibilité d'ajouter de nouvelles catégories ou de mettre à jour les catégories existantes pour les produits.
- **Gestion des Produits** :  
  En tant qu'admin, je veux pouvoir voir et gérer les produits listés sur la plateforme.
- **Gestion des Permissions et Rôles des Utilisateurs** :  
  En tant qu'admin, je veux gérer les permissions et rôles des utilisateurs.

### Client

- **Inscription** :  
  En tant que client, je veux pouvoir créer un nouveau compte.
- **Connexion Sécurisée** :  
  En tant que client, je veux pouvoir me connecter de manière sécurisée à mon compte.
- **Gestion de Profil** :  
  En tant que client, je veux pouvoir éditer mon profil.
- **Navigation des Produits** :  
  En tant que client, je veux pouvoir voir la liste des produits disponibles.
- **Recherche de Produits** :  
  En tant que client, je veux pouvoir rechercher des produits selon différents critères.
- **Panier d'Achat** :  
  En tant que client, je veux pouvoir ajouter des produits à mon panier pour les acheter.
- **Paiement et Commande** :  
  En tant que client, je veux pouvoir passer à la caisse et effectuer un paiement sécurisé.
- **Avis sur les Produits** :  
  En tant que client, je veux pouvoir évaluer et commenter les produits que j'ai achetés.

### Vendeur

- **Inscription Compte Vendeur** :  
  En tant que vendeur, je veux pouvoir créer un nouveau compte vendeur.
- **Connexion Sécurisée** :  
  En tant que vendeur, je veux pouvoir me connecter de manière sécurisée à mon compte vendeur.
- **Gestion de Profil** :  
  En tant que vendeur, je veux pouvoir éditer mon profil.
- **Gestion des Produits** :  
  En tant que vendeur, je veux pouvoir ajouter et gérer mes produits à vendre.
- **Mises à Jour des Stocks et Prix** :  
  En tant que vendeur, je veux pouvoir mettre à jour la disponibilité des stocks et les prix de mes produits.

---

## Technologies Utilisées

- **Backend** : Express.js
- **Frontend** : React.js
- **Base de Données** : MySQL avec Sequelize
- **Authentification** : JSON Web Token (JWT) utilisant les cookies
- **Gestion d'État** : Redux
- **Routage** : React Router Dom
- **UI** : Material UI
- **Stockage des Médias** : Cloudinary
- **Intégration Paiement** : Flouci (fonctionnalité optionnelle)

---

## Installation

### Prérequis

- Node.js
- MySQL
- Git

### Étapes d'Installation

## **Démarrage du Projet**

### **1. Création de la Base de Données MySQL**

Créez votre base de données MySQL en utilisant MySQL Workbench ou via le terminal MySQL (`mysql>`). Exécutez la commande suivante pour créer la base de données :

```sql
CREATE DATABASE ecommerceWeek;
```

### **2. Cloner le Dépôt**

Clonez le projet depuis GitHub et accédez au répertoire du projet avec les commandes suivantes :

```bash
git clone https://github.com/The-green-field-project/e-Commerce_Week.git
cd e-Commerce_Week
```

### **3. Configurer le Fichier `.env`**

Après avoir cloné le dépôt, créez un fichier `.env` dans le dossier `backend` et ajoutez-y les informations de configuration nécessaires :

```plaintext
# Configuration du serveur
PORT=3100
NODE_ENV=development

# Base de données
DB_HOST=localhost
DB_PORT=3306
DB_USER=votre_user
DB_PASSWORD=votre_password
DB_NAME=ecommerce
DB_URL=mysql://user:password@localhost:3306/ecommerce

# JWT (JSON Web Token)
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h

# Configuration de CORS (Cross-Origin Resource Sharing)
CORS_ORIGIN=http://localhost:3100

# Configuration pour d'autres services (ex : Cloudinary)
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name

# SMTP (Simple Mail Transfer Protocol) pour l'envoi d'e-mails
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

Assurez-vous de remplacer les valeurs placeholders (`votre_user`,`votre_password`,`your_jwt_secret_key`, `your_smtp_user`, `your_smtp_password`, etc.) par vos informations réelles.

### **4. Configuration du Backend**

1. **Installation des Dépendances :**

   Accédez au dossier `backend` et installez les dépendances requises avec npm :

   ```bash
   cd backend
   npm install
   ```

2. **Démarrer le Serveur :**

   Lancez le serveur backend pour la première fois à l'aide de la commande suivante :

   ```bash
   npm start
   ```

3. **Synchroniser et Initialiser la Base de Données :**

   - Utilisez `db.sync()` pour synchroniser la base de données lors du premier démarrage. Une fois le message de succès affiché, commentez cette ligne pour les démarrages ultérieurs.
   - Exécutez ensuite les seeders pour insérer les données initiales dans la base de données :

     ```bash
     npm run main
     ```

### **5. Configuration du Frontend**

1. **Accéder au Dossier Frontend :**

   Une fois le backend configuré, accédez au dossier `frontend` :

   ```bash
   cd ../frontend
   ```

2. **Installation des Dépendances :**

   Installez les dépendances nécessaires pour le frontend :

   ```bash
   npm install
   ```

3. **Démarrer le Frontend :**

   Lancez le serveur frontend avec la commande suivante :

   ```bash
   npm start
   ```

---

## Développement

Le projet a été développé dans un cadre de sprint sur une semaine, en se concentrant d'abord sur les fonctionnalités clés, suivies d'itérations pour les améliorations et corrections de bugs.

### Équipe

- **Siwar Ameri** - Développeuse
- **Dhekra Maghroum** - Développeuse
- **Fedi Chebbi** - Développeur
- **Aymen Khalfa** - Product Owner & Développeur
- **Azyz Kabada** - Scrum Master & Développeur
