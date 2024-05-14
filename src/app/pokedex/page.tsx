"use client"

import { getPokemonData } from "@/lib/api";
import { useEffect, useState } from "react";
import PokemonPreview from "../components/pokemon/pokeprev";
import { useDispatch, useSelector } from "react-redux";
import { changePagination, getPagination } from "@/lib/paginationSlice";

export default function Pokedex() {
    const [pokelist, setPokelist] = useState<any[]>([]);
    const page = useSelector(getPagination);
    const dispatch = useDispatch();

    const handlePrevPag = () => {
        dispatch(changePagination(page-1));
    }

    const handleNextPag = () => {
        dispatch(changePagination(page+1));
    }

    useEffect(()=>{
        getPokemonData(page).then(data => {
            if(page == 7) {
                const truncated = data.results.splice(0,11);
                setPokelist(truncated);
            } else setPokelist(data.results);
        });
    }, [page]);

    return (
        <div className="pokelist-wrapper">
            <div className="pokelist ds-grid-2">
                {
                    pokelist.map(pokemon =>
                        <PokemonPreview pokemon={pokemon} key={pokemon.name} />
                    )
                }
                
            </div>
            <div className="pagination">
                    <div className="prev-pag">
                        {page > 0 ? 
                            <button onClick={handlePrevPag}>Prev</button>
                            : <></>
                        }
                    </div>
                    <div className="next-pag">
                        {page < 7 ? 
                            <button onClick={handleNextPag}>Next</button>
                            : <></>
                        }
                    </div>
                </div>
        </div>
    );
}