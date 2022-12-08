

import CustomButtom from '../customButton/CustomButton'
import { useState } from 'react'


const Counter = () => { 
    
    const [counter, setCounter] = useState(0)


    return (
    <div>
        <h2>{counter}</h2>
        <CustomButtom texto={"Sumar"} counter={counter} setCounter={setCounter}/>
    </div>
  )
}

export default Counter