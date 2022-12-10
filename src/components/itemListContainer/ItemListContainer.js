
import {useState, useEffect} from "react"
//import CustomButtom from "../customButton/CustomButton"
import "./ItemListContainer.css"
import Counter from '../counter/counter'

const ItemListContainer = ( { greeting } ) => {

    const [ isDark, setIsDark ] = useState( false )
    const [ num , setNum ] = useState(0)

    const tooggleMode = () =>{
        
        setIsDark  ( !isDark )
    }

    console.log(isDark)
    
    useEffect( ()=>{
        console.log("Hola dentro del primer Efecto")
    } )

    useEffect( ()=>{
        console.log("Hola desde el efecto con array de dependencia VACIO")
    }, [] ) //arreglo de dependencia
    useEffect( ()=>{
        console.log("Hola desde el efecto con array de dependencia a la escucha de NUM")
    }, [ num ] ) //arreglo de dependencia

    const onAdd = ()=>{
        console.log("Hola")
    }

    return (
    <div className={isDark ? "container-items-dark" : "container-items-light"}>
            <h2>{greeting}</h2>
            <button onClick={tooggleMode}>
                {isDark ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            </button>
            <button onClick={()=> setNum(num + 1)}>
                Sumar
            </button>

            <Counter stock={10} initial={1} onAdd={onAdd} /> 

        </div>
        )
}

export default ItemListContainer