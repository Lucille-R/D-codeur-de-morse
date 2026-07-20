# 📡 D-codeur-de-morse
Ce projet est un encodeur et décodeur de morse, développé en JavaScript.
Il permet de traduire du texte en morse, et inversement, via une interface web simple.

## 📝 Description
Le morse est un alphabet codé qui remplace les caractères par des impulsions représentés par des points (`.`) ou des tirets (`-`) suivant si elles sont courtes ou longues.

Ce projet propose :
- Une fonction d'**encodage** : texte → morse
- Une fonction de **décodage** : morse → texte
- Une interface HTML permettant de tester les deux traductions

## ✨ Fonctionnalités

- [x] Découpage d'une chaîne de caractères en tableau de caractères
- [x] Traduction d'un caractère latin en morse
- [x] Encodage d'un texte complet en morse
- [x] Traduction d'un caractère morse en latin
- [x] Décodage d'un message morse complet
- [x] Interface utilisateur avec champs de saisie et boutons
- [x] Mise en place du style sur l'interface utilisateur

## 🛠️ Technologies utilisées

- **JavaScript** (Vanilla JS)
- **HTML5**
- **CSS3**

## 📂 Structure du projet

```
D-codeur-de-morse/
├── index.html
├── style.css
├── script.js
├── images/
│   └── logo.png
└── README.md
```

## 🚀 Installation

1. Cloner le repository :
   ```bash
   git clone git@github.com:Lucille-R/D-codeur-de-morse.git
   ```
2. Se rendre dans le dossier du projet :
   ```bash
   cd D-codeur-de-morse
   ```
3. Ouvrir le fichier `index.html` dans le navigateur (aucune installation de dépendance nécessaire).

## 💻 Utilisation

1. Saisir un texte dans le champ prévu à cet effet.
2. Cliquer sur le bouton **"Encoder"** pour obtenir sa traduction en morse.
3. Saisir un message en morse (lettres séparées par un espace, mots séparés par `/`).
4. Cliquer sur le bouton **"Décoder"** pour obtenir le texte correspondant.

**Exemple :**
| Texte | Morse |
|-------|-------|
| `HELLO` | `.... . .-.. .-.. ---` |

## 🌳 Workflow Git

Ce projet suit une organisation en branches inspirée de Git Flow :

- `main` : version stable du projet
- `dev` : branche d'intégration des fonctionnalités
- `feature/nom-de-la-feature` : une branche par fonctionnalité développée

## 👤 Auteur

- **Lucille Richard** — Étudiante chez Ada Tech School

## 📄 Licence

Projet réalisé dans un cadre pédagogique — Ada Tech School.