

import CustomButtom from '../customButton/CustomButton'
import { useState } from 'react'


const Counter = (stock, initial, onAdd) => { 
    
    const [counter, setCounter] = useState(initial)


    return (
    <div>
        <h2>{counter}</h2>
        <CustomButtom texto={"Sumar"} counter={counter} setCounter={setCounter}/>
        <button>Sumar</button>
        <button>Restar</button>
        <button>Agregar al carrito</button>

    </div>
  )
}

export default Counter