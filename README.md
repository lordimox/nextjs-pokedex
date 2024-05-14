This is a [Next.js](https://nextjs.org/) project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

IMAGES USED IN THIS PROJECT ARE NOT OF MY PROPERTY. 
Open source PokeAPI is used to consume the data of Pokemons to develop this pokedex.
Images of Pokemon and Pokeball where extracted from Wikipedia since they allowed to used their content even for comercial purposes. 



## Information about the project
This is a test project made for DensityLabs.
I'm writing some comments below about what I did in the project:

REDUX
I decided to use Redux Slices to be able to use mutating states, since it uses Immer and allows this thing to happen.
Also, declaring functions without checking action.type reduces changes of making mistakes as typo errors, and we can export those functions as slice.actions to access them outside the code and directly calling sending the payload without having to specify the event type in dispatch.

ROUTING
Next.js provides routing in the project through AppRouter and PageRouter.
I used AppRouter, that consists in creating new folders inside app and every folder with a page.tsx file inside is a new route.
I like this architecture since Next.js also allows you to declare some special components in File Conventions:
    - Declaring a layout.tsx file inside the folder, allows you to give some layout to any page/component below this.
    - Declaring a loading.tsx file inside the folder, allows you to set a loading screen for the content.
    - You may declare a not-found.tsx file in every folder too, but I did not creat any new since Next.js has one as default.
    - Declaring a folder with brackets [] gets a dynamic route, so the name you set inside the brackets for the folder will be the key for the params to get the value.
Landing is a Welcome Page with a link, this is to better understand the logic that Next App Router follows in case reviewer is not familiarized with it.

HOOKS
I've used useState and useEffect hooks in pokedex/page.tsx.
useState is for the PokemonList, that will be updated inside useEffect hook everytime page value changes.
Since useSelector react-redux hook makes a suscription to Redux Store, the value will change an so the PokemonList.

CASING
I used kebab-case for class names, so every style made is in this casing.
As a common good practice in React, I used camelCase for variables and functions, and PascalCase for React Components.
