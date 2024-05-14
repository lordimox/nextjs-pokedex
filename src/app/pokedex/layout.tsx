"use client"

import { Pokemon, Pokeprev } from "@/lib/definitions";
import { getSelectedPokemon } from "@/lib/pokeselected";
import { useSelector } from "react-redux";

export default function PokedexLayout({children}:{children:React.ReactNode}) {
    const curPok:Pokemon = useSelector(getSelectedPokemon);

    return (
        <div className="content-wrapper ds-grid-2">
            <div className="pokedex-wrapper">
                <img src="/pokemon.png" alt="pokemon" />
                <div className="pokemon-img-wrapper">
                    <img src={curPok.sprites?.front_default || "/pokeball.png"} alt="pokeform"/>
                </div>
            </div>
            {children}
        </div>
    );
}