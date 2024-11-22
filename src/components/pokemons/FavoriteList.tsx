import type { FavoritePokemon } from "@interfaces/favoritePokemon"
import { For } from "solid-js"
import { createSignal } from "solid-js"
import { create } from "zustand"
import { FavoritePokemonCard } from "./FavoritePokemon"

const getLocalStorage = (): FavoritePokemon[] => {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]')
    return favorites
}

export const FavoriteList = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStorage())
    return (
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-5">
            <For each={pokemons()}>{(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}</For>

        </div>
    )
}