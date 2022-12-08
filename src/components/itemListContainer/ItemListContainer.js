
import {useState} from "react"
//import CustomButtom from "../customButton/CustomButton"
import "./ItemListContainer.css"

const ItemListContainer = ( { greeting } ) => {

    const [ isDark, setIsDark ] = useState( false )

    const tooggleMode = () =>{
        
        /* if(isDark === true){
            setIsDark(false)
        }else if(isDark === false){ 
            setIsDark(true)
        } */

        setIsDark  ( !isDark )

    }
    console.log(isDark)
    return (
        <div className={isDark ? "container-items-dark" : "container-items-light"}>
            <h2>{greeting}</h2>
            <button onClick={tooggleMode}>
                {isDark ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}</button>            
        </div>
        )
}

export default ItemListContainer