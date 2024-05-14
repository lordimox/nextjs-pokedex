"use client"
import { getPokemonByName } from "@/lib/api";
import { changePagination } from "@/lib/paginationSlice";
import { getSelectedPokemon, pokemonSelected } from "@/lib/pokeselected";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function PokeDetails({params}:{params:{name:string}}) {
    const pokemon = useSelector(getSelectedPokemon);
    const dispatch = useDispatch();

    if(!pokemon.name) {
        getPokemonByName(params.name).then(data => {
            dispatch(changePagination(Math.floor(data.id/20)));
            dispatch(pokemonSelected(data));
        });
    }

    return (
        <div className="pokemon-details">
            <Link href={"/pokedex"}>
                <img src="/back.svg" alt="back" />
            </Link>
            <h1 className="pokemon-name">{pokemon.name}</h1>
            <h4 className="poke-subtitle">Types</h4>
            <div className="poke-types ds-grid-2">
                {pokemon.types?.map(poketype=>(
                    <p className="poke-type" key={poketype.type.name}>{poketype.type.name}</p>
                ))}
            </div>
            <h4 className="poke-subtitle">Abilities</h4>
            <div className="ds-grid-2">
                {
                    pokemon.abilities?.map(ability=>(
                        <p className="poke-ability" key={ability.ability?.name}>{ability.ability?.name}</p>
                    ))
                }
            </div>
            <h4 className="poke-subtitle">Stats</h4>
            <p>{`Height: ${(pokemon.height || 0)/10} m`}</p>
            <p>{`Weight: ${(pokemon.weight || 0)/10} kg`}</p>
            {pokemon.stats?.map(stat=>(
                <p className="poke-stat" key={stat.stat.name}>{`${stat.stat.name}: ${stat.base_stat}`}</p>
            ))}
        </div>
    );
}