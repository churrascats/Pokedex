import React, {useEffect} from "react"

export default function Search(props){

    React.useEffect(() => {
        window.addEventListener('click', (event) => {
        let selectedPokemon = document.getElementsByClassName("search")[0].selectedIndex + 1
        document.getElementById("pictureImg").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + selectedPokemon + ".png"
        })
    });

    return <div id="yellowBox2">Search</div>
}