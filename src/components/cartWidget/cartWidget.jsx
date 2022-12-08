
import "./cartWidget.css"
import { BsFillCartCheckFill } from 'react-icons/bs';

export const CartWidget = () => {
    return (
        <div className="container-cart">
            <BsFillCartCheckFill 
            size={50} 
            color={"#181818"}/>
        </div>
    )
}

