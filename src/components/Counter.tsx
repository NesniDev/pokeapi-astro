import { createSignal, type Component } from "solid-js"

interface Props {
    initValue: number
}

export const Counter: Component<Props> = ({initValue}) => {

    //señales SOLIDJS
    const [counter, setCounter] = createSignal(initValue)



    return (
    <>
        <h1 class="text-3xl">Counter</h1>
        <h3 class="text-xl">Value: {counter()}</h3>
        <button class="bg-blue-500 p-2 mr-2 rounded" onclick={()=> setCounter(counter() + 1)}>+1</button>
        <button class="bg-blue-500 p-2 mr-2 rounded" onclick={()=> setCounter(counter() - 1)}>-1</button>
    </>)
}