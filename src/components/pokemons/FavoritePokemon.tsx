import type { FavoritePokemon } from "@interfaces/favoritePokemon"
import { createSignal, Show, type Component } from "solid-js"

interface Props {
    pokemon: FavoritePokemon
}
export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {
    const [isVisible, setIsVisible] = createSignal(true)
    const imgSRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
    
    const deleteFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[]
        const newFavorites = favorites.filter(p => p.id !== pokemon.id)

        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        setIsVisible(false)
    }

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center">
                <a href={`/pokemons/${pokemon.name}`}>{pokemon.name}</a>
                <img src={imgSRC} alt={pokemon.name} class="w-32 h-32 rounded-full" style={`view-transition-name: ${pokemon.name}-image`} />
                <p class="capitalize">#{pokemon.id}{pokemon.name}</p>
                <button class="bg-red-500 p-2 rounded" onclick={deleteFavorite}>Eliminar</button>
            </div>
        </Show>
    )
}