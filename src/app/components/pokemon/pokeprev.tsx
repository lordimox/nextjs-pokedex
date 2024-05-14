"use client"

import { getPokemonByUrl } from "@/lib/api";
import { Pokemon, Pokeprev } from "@/lib/definitions";
import { getSelectedPokemon, pokemonSelected } from "@/lib/pokeselected";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function PokemonPreview({pokemon}:{pokemon:Pokeprev}) {
    const dispatch = useDispatch();
    const router = useRouter();
    const curPok = useSelector(getSelectedPokemon);
    
    const handleClick = async()=>{
        if(pokemon.url) {
            const pokemonData:Pokemon = await getPokemonByUrl(pokemon.url);
            dispatch(pokemonSelected(pokemonData));
        }
    }

    const handleDoubleClick = ()=>{
        router.push("/pokedex/"+pokemon.name);
    }

    return (
        <div className={`pokemon-preview flex-center ${curPok.name === pokemon.name ? "poke-selected" : ""}`} onClick={handleClick} onDoubleClick={handleDoubleClick}>
            <h3>{pokemon.name}</h3>
        </div>
    );
}