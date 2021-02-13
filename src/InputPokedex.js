import React from "react"
import PokemonsName from "./PokemonsName"

export default function InputPokedex(){
    return (
        <>
            <strong>Pokemon:</strong>
            <select className="search"><PokemonsName></PokemonsName></select>
        </>
        )
}
