# calculateur-algebre
Relational Algebra Calculator 🧮 A web-based educational tool (HTML/CSS/JS) for simulating database operations: selection (sigma), projection (pi), union (cup), intersection (cap), difference (-$), and product (times). Ideal for the BTS DAI curriculum to visualize the logical manipulation of data before moving on to SQL.


1.INTRODUCTION
L'algèbre relationnelle est le fondement théorique des bases de données relationnelles (SQL). L'objectif de cette application est de fournir un outil interactif permettant de manipuler des relations (tables) à travers les opérations fondamentales afin de valider la structure des données avant leur implémentation physique.
2.Architecture Technique
L'application repose sur une architecture Front-End pure (Client-Side), garantissant une exécution rapide sans dépendance serveur.

HTML5 : Structure de l'interface (Zones de saisie, contrôles et affichage).

CSS3 : Mise en forme moderne type "Dark Mode" pour un confort visuel de type développeur.

JavaScript (ES6+) : Moteur logique gérant le parsing des données, les algorithmes relationnels et la mise à jour dynamique du DOM.
3. Analyse des Opérations Implémentées
A. Opérations Unaires (sur une seule table)Sélection ($\sigma$) : Filtre les n-uplets (lignes) répondant à un prédicat logique.Implémentation : Utilisation de la méthode .filter().Projection ($\pi$) : Réduit le schéma de la relation à un sous-ensemble d'attributs (colonnes).Implémentation : Utilisation de .map() pour reconstruire des objets avec les clés sélectionnées. 
B. Opérations Binaires (sur deux tables)Union ($\cup$) : Fusionne deux relations de même schéma en éliminant les doublons.Intersection ($\cap$) : Extrait les n-uplets communs aux deux relations.Différence ($-$) : Extrait les n-uplets présents dans la première relation mais pas dans la seconde.Produit Cartésien ($\times$) : Combine chaque ligne de la Relation A avec chaque ligne de la Relation B.
4. Choix de Conception Logique
Format de Données : Le format JSON a été choisi pour la saisie car il représente nativement des objets structurés, facilitant ainsi le passage entre l'interface et le moteur de calcul JavaScript.

Gestion de l'intégrité : Pour les opérations d'ensemble (Union, Intersection), le programme compare les objets par "sérialisation" (JSON.stringify) pour s'assurer que même les objets identiques en valeur mais différents en référence mémoire soient correctement identifiés comme doublons.
