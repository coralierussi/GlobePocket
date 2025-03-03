# Diagramme de séquence
### Paiement des voyages

```ts 
sequenceDiagram
    participant PGM
    participant Banque
    participant Base de Données
    actor Utilisateur

    PGM->>Base de Données: Creation user anonyme (mdp, mail)
    Base de Données->>PGM: id compte anonyme et adresse mail et mot de passe
    PGM->>PGM: Rediriger vers un lien paiement Paypal ou Visa
    PGM->>PGM: remplir renseignement paiement
    PGM->>Banque: Envoie détails de transaction + autorisation
    Banque->>PGM: Autorisation
    PGM->>PGM: Confirmation de paiement
    PGM->>Base de Données: Met à jour informations utilisateur donnée bancaire
    Base de Données->>PGM: Confirmation de mise à jour
    PGM ->> PGM: Acces à la page "Mes commandes"
    PGM->>Utilisateur: Envoie email de confirmation d achat et de création de compte
    Utilisateur ->> PGM: Redirection page creation compte (id compte anonyme)
    PGM ->> PGM:  completer compte
    PGM->>Base de Données: Mise à jour informations utilisateur complet (email?, mdp,id compte, pseudo)
    Base de Données->>PGM: OK
    PGM ->>Utilisateur : Mail de confirmation creation du compte

```

![Image de diagramme de séquence paiement pour voyage](/assests/Diagram/image.png)

## Diagramme de classe

```ts
classDiagram
   class Utilisateur {
    +id: int
    +email: string
    +motDePasse: string
    +pseudo: string
    +effectuerPaiement()
    +creerCompte()
}

class PGM {
    +redirigerVersPaiement()
    +traiterPaiement()
    +mettreAJourUtilisateur()
    +envoyerEmailConfirmation()
}

class Banque {
    +verifierTransaction()
}

class BaseDeDonnees {
    +creerUtilisateur()
    +mettreAJourUtilisateur()
}

Utilisateur --|> PGM : "interagit avec"
PGM --|> Banque : "Envoie transaction à"
PGM --|> BaseDeDonnees : "Met à jour"
```
![Image diagramme de classe paiment voyage](/assests/Diagram/image-3.png)

# Diagramme de séquence
### Paiement de la version premium

```ts
sequenceDiagram
    participant PGM
    participant Banque
    participant Base de Données
    actor Utilisateur

    PGM->>Base de Données: Creation user anonyme (mdp, mail)
    Base de Données->>PGM: id compte anonyme et adresse mail et mot de passe
    PGM->> PGM: Redirection page profil
    PGM ->>Utilisateur : Mail de confirmation creation du compte
    PGM ->>Utilisateur : Mail pour finaliser la création de compte
    PGM->> PGM: Finalisation de compte
    PGM->>Base de Données: Mise à jour informations utilisateur complet (email?, mdp,id compte, pseudo)
    Base de Données->>PGM: OK
    PGM ->>Utilisateur : Mail de confirmation creation du compte
    PGM->> PGM: Page "Mes RDVs"
    Utilisateur->> PGM: Prendre rendez-vous Webinaire
    PGM->> PGM: Mail de confirmation de rendez-vous avec lien de la visio
    

    PGM ->> PGM: Envoi d'un mail récapitulatif du webinaire
    PGM ->> PGM: Redirection le formulaire
    PGM ->> PGM: Remplir le formulaire
    PGM ->> PGM: Redirection vers un lien paiement Paypal ou Visa
    PGM->>PGM: remplir renseignement paiement
    PGM->>Banque: Envoie détails de transaction + autorisation
    Banque->>PGM: Autorisation
    PGM->>PGM: Confirmation de paiement
    PGM->>Base de Données: Met à jour informations utilisateur donnée bancaire
    Base de Données->>PGM: Confirmation de mise à jour
```
![Image de diagramme de séquence paiement abonnement](/assests/Diagram/image-2.png)

## Diagramme de classe

```ts
classDiagram
   class Utilisateur {
    +id: int
    +email: string
    +motDePasse: string
    +pseudo: string
    +prendreRendezVous()
    +finaliserCompte()
}

class PGM {
    +redirigerVersProfil()
    +envoyerEmailConfirmation()
    +finaliserCompte()
    +gererRendezVous()
    +envoyerEmailWebinaire()
    +traiterPaiement()
    +mettreAJourUtilisateur()
}

class Banque {
    +verifierTransaction()
}

class BaseDeDonnees {
    +creerUtilisateur()
    +mettreAJourUtilisateur()
}

Utilisateur --|> PGM : "Interagit avec"
PGM --|> Banque : "Envoie transaction à"
PGM --|> BaseDeDonnees : "Met à jour"
PGM --|> Utilisateur : "Envoie emails"
```
![Image de diagramme de séquence paiement abonnement](/assests/Diagram/image-5.png)