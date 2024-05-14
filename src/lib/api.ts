export async function getPokemonData(offset:number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset*20}&limit=20`);
    const data = await response.json();
    return data;
}

export async function getPokemonByUrl(url:string) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getPokemonByName(name:string) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
}