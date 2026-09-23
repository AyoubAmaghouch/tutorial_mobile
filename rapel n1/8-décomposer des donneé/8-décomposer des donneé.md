# Décomposition de la table des commandes

## 1. Table initiale (observation)

  ------------------------------------------------------------------------------------
    Numéro        Date     Nom       Email client      Nom            Prix    Quantité
   commande     commande   client                      produit     produit   commandée
  ----------- ------------ --------- ----------------- --------- --------- -----------
     C001      10/09/2026  Madani    madani@mail.com   Clavier         200           2
                           Ali                                             

     C001      10/09/2026  Madani    madani@mail.com   Souris          100           1
                           Ali                                             

     C002      11/09/2026  Sara      sara@mail.com     Clavier         200           3
                           Amrani                                          
  ------------------------------------------------------------------------------------

Ici, on peut constater que beaucoup d'informations sont répétées, comme
le nom du client, le nom du produit et le numéro de commande.

## 2. Identifiants fonctionnels

  -----------------------------------------------------------------------
  Identifiant                         Détermine
  ----------------------------------- -----------------------------------
  **id_client**                       nom_client + email_client

  **id_produit**                      nom_produit + prix_produit

  **id_commande**                     numero_commande + date_commande +
                                      quantite_commandee
  -----------------------------------------------------------------------

## 3. Résultat final

Après avoir corrigé les problèmes de répétition des informations, nous
obtenons les trois tables suivantes :

  -----------------------------------------------------------------------
  Table                               Attributs
  ----------------------------------- -----------------------------------
  **CLIENT**                          id_client, nom_client, email_client

  **PRODUIT**                         id_produit, nom_produit,
                                      prix_produit

  **COMMANDE**                        id_commande, numero_commande,
                                      date_commande, quantite_commandee,
                                      id_client, id_produit
  -----------------------------------------------------------------------

## 4. Table COMMANDE

  ------------------------------------------------------------------------
  ID commande   Numéro        Date      Quantité    ID client  ID produit
               commande     commande    commandée              
  ----------- ----------- ------------ ----------- ----------- -----------
       1         C001      10/09/2026       3           1           1

       2         C002      10/09/2026       1           1           2
  ------------------------------------------------------------------------

## 5. Table CLIENT

   ID client  Nom client    Email client
  ----------- ------------- -----------------
       1      Madani Ali    madani@mail.com
       2      Sara Amrani   sara@mail.com

## 6. Table PRODUIT

   ID produit  Nom produit     Prix produit
  ------------ ------------- --------------
       1       Clavier                  200
       2       Souris                   100
