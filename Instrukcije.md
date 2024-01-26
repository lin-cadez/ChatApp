# Navodila kako narediti podoben projekt

## Frontend

### 1. Create-react-app

Najprej ustvarimo projekt z ukazom `npx create-react-app ime-projekta`. Nato se premaknemo v mapo projekta z ukazom `cd ime-projekta`.

Projekt zaženemo z ukazom `npm start`.

### 2. Naredimo mapo za komponente in v njej mapo za vsako komponento (opcijsko)

V mapi `src` naredimo mapo `components`. V njej naredimo mapo za vsako komponento. V našem primeru bomo naredili mape:

-   Login
-   Register
-   Home
-   Profile
-   Settings

V vsaki mapi naredimo datoteko `Komponenta.js` in `Komponenta.css`. V datoteki `Komponenta.js` napišemo komponento.

Te komponente nato uvozimo v `App.js` tako, da jih uvozimo z ukazom `import Komponenta from './components/Komponenta/Komponenta'`.

## Backend

### 1. Naredimo mapo za backend

V CMD-ju se premaknemo v mapo projekta in naredimo mapo `backend` z ukazom `mkdir backend`. Nato se premaknemo v to mapo z ukazom `cd backend` in naredimo `package.json` z ukazom `npm init -y`.

### 2. Namestimo potrebne module

Za backend bomo potrebovali module `express`, `cors` in `nodemon`.Te module namestimo z ukazom `npm i express cors nodemon`.